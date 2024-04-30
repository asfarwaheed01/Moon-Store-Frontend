import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useState } from "react";
import { useAuth } from "../context/authContext";

interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

interface SignupResponse {
  token: string;
  newUser: User;
}

export const useSigninMutation = () => {
  const { dispatch } = useAuth();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const signupMutation = useMutation({
    mutationFn: async ({
      username,
      email,
      password,
    }: {
      username: string;
      email: string;
      password: string;
    }) => {
      setIsPending(true);

      try {
        const response = await axios.post<SignupResponse>(
          `${BASE_URL}api/users`,
          {
            username,
            email,
            password,
          }
        );
        const { newUser, token } = response.data;

        localStorage.setItem("user", JSON.stringify(newUser));
        localStorage.setItem("access_token", token);
        // Update user and accessToken state in context
        dispatch({ type: "SET_USER", payload: newUser });
        dispatch({ type: "SET_ACCESS_TOKEN", payload: token });
        setError(null);
        return response.data;
      } catch (error) {
        setError(error);
        throw new Error("Signup failed");
      } finally {
        setIsPending(false);
      }
    },
  });

  return {
    signup: signupMutation.mutate,
    pending: isPending,
    error: error,
  };
};
