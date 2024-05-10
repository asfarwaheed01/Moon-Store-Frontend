"use client";
import { useState } from "react";
import Link from "next/link";
import { useLoginMutation } from "../hooks/AuthHook";
import { useRouter } from "next/navigation";
import loginImage from "@/public/assets/blog4.png";
import Image from "next/image";
import Google from "../components/googleLogin/Google";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, pending, error } = useLoginMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await mutate({ email, password });
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-auto py-[5%] gap-5">
      <div className="hidden md:block w-[50%]">
        <Image
          src={loginImage}
          alt="login-image"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="md:w-[50%] max-w-[400px]">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {pending ? "Signing in..." : "Sign In"}
            </button>
          </div>
          <div className="text-sm mt-2 text-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
          {error && (
            <div className="text-red-500 py-2 text-center">{error.message}</div>
          )}
          <Google />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
