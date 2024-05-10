import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { api } from "@/app/hooks/api";
import { useAuth } from "@/app/context/authContext";
import app from "@/app/config/firebase";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Google = () => {
  const { dispatch } = useAuth();
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { email } = result.user;
      const response = await api.post("api/users/google", {
        email,
      });
      const { data } = response;
      const { user, token } = data;
      console.log("Login successful:", user, token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("access_token", token);
      dispatch({ type: "SET_USER", payload: user });
      dispatch({ type: "SET_ACCESS_TOKEN", payload: token });
      router.push("/");
    } catch (error) {
      console.error("Google Sign-In failed:", error);
    }
  };
  return (
    <div className="flex items-center justify-center mb-4 mt-2">
      <button
        className="flex items-center bg-white border border-gray-400 px-4 py-2 rounded-md shadow-sm hover:shadow-md"
        type="button"
        onClick={handleGoogleSignIn}
      >
        <FaGoogle className="mr-2 text-xl text-red-600" /> Sign in with Google
      </button>
    </div>
  );
};

export default Google;
