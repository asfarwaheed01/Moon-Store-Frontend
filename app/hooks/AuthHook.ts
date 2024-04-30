import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useState } from "react";
import { useAuth } from "../context/authContext";

interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
}

interface LoginResponse {
  token: string;
  existingUser: User;
}

export const useLoginMutation = () => {
  const { dispatch } = useAuth();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      setIsPending(true);
      try {
        const response = await axios.post<LoginResponse>(
          `${BASE_URL}api/users/auth`,
          {
            email,
            password,
          }
        );
        const { existingUser, token } = response.data;

        localStorage.setItem("user", JSON.stringify(existingUser));
        localStorage.setItem("access_token", token);
        // Update user and accessToken state in context
        dispatch({ type: "SET_USER", payload: existingUser });
        dispatch({ type: "SET_ACCESS_TOKEN", payload: token });
        setError(null);

        return response.data;
      } catch (error) {
        setError(error);
        throw new Error("Login failed");
      } finally {
        setIsPending(false);
      }
    },
  });

  return {
    mutate: loginMutation.mutate,
    pending: isPending,
    error: error,
  };
};
