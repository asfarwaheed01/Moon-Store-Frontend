import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useState } from "react";
import { useAuth } from "../context/authContext";

interface LogoutResponse {
  success: boolean;
}

export const useLogoutMutation = () => {
  const { dispatch } = useAuth();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const logoutMutation = useMutation<LogoutResponse>({
    mutationFn: async () => {
      setIsPending(true);
      try {
        const response = await axios.post<LogoutResponse>(
          `${BASE_URL}api/users/logout`
        );
        localStorage.removeItem("user");
        localStorage.removeItem("access_token");
        dispatch({ type: "REMOVE_USER" });
        dispatch({ type: "REMOVE_ACCESS_TOKEN" });

        return response.data;
      } catch (error) {
        setError(error);
        throw new Error("Logout failed");
      } finally {
        setIsPending(false);
      }
    },
  });

  return {
    logout: logoutMutation.mutate,
    pending: isPending,
    error: error,
  };
};
