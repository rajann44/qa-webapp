import { createContext, useContext } from "react";
import { AuthTokensType } from "../types/types";

interface AuthContextProps {
  authTokens: AuthTokensType;
  setAuthTokens: (data: AuthTokensType) => void;
}

const initialAuthContext: Partial<AuthContextProps> = {
  authTokens: false,
};

export const AuthContext = createContext(initialAuthContext);

export default function useAuth() {
  return useContext(AuthContext);
}
