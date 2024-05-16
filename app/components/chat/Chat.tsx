"use client";
import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  useEffect,
  useMemo,
} from "react";
import chatIcon from "../../../public/assets/chat-icon.png";
import Image from "next/image";
import { io, Socket } from "socket.io-client";

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<
    { text: string; fromSelf: boolean }[]
  >([]);
  const [inputValue, setInputValue] = useState<string>("");

  const socket: Socket = io("http://localhost:8000");

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: message, fromSelf: false },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e: MouseEvent<HTMLButtonElement>) => {
    if (inputValue.trim() !== "") {
      socket.emit("message", inputValue);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, fromSelf: true },
      ]);
      setInputValue("");
    }
  };

  return (
    <div className="fixed bottom-4 md:right-8 right-4">
      {isOpen ? (
        <div className="relative w-70 md:w-80 h-96 bg-white shadow-lg rounded-lg p-4 transition-opacity duration-500 ease-in-out opacity-100">
          <button
            className="absolute top-2 font-bold right-2 text-[#3A3845]"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <div className="flex flex-col h-full">
            <div className="flex-grow p-2 overflow-y-auto border-b border-gray-300">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2 p-2 rounded-lg ${
                    message.fromSelf
                      ? "bg-gray-200 flex justify-end"
                      : "bg-blue-200 self-start"
                  }`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="flex mt-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
                className="w-[80%] p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="py-2 w-[20%] bg-[#3A3845] font-semibold text-center text-white rounded-r-lg hover:bg-gray-700 transition-background duration-300 ease-in-out"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-transform duration-300 ease-in-out transform scale-100"
          onClick={() => setIsOpen(true)}
        >
          <Image src={chatIcon} alt="Chat" className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default Chat;
