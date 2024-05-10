"use client";
import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { authReducer } from "./reducers";
import { AuthContextType, AuthState } from "./context.type";

const initialState: AuthState = {
  user: null,
  accessToken: null,
  cart: [],
};

export const AuthContext = createContext<AuthContextType>({
  state: initialState,
  dispatch: () => null,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Set state from local storage when component mounts
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const accessToken = localStorage.getItem("access_token");
    dispatch({ type: "SET_USER", payload: user });
    dispatch({ type: "SET_ACCESS_TOKEN", payload: accessToken });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
