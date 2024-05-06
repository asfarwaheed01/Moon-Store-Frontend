"use client";
import { AuthContext } from "@/app/context/authContext";
import React, { useContext } from "react";
import { useLogoutMutation } from "../hooks/LogoutHook";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const { logout, pending, error } = useLogoutMutation();
  const { state } = useContext(AuthContext);
  const { user } = state;
  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("Logout Failed:", error);
      alert("Failed to logout.");
    }
  };
  return (
    <div className="flex justify-center items-center h-auto py-[5%]">
      <div className="w-full max-w-md p-8 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={user?.username}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            value={user?.email}
            readOnly
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            value="********"
            readOnly
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
