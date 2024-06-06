import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User, UserCredentials } from "@utils/types";
import { postUserCredentials } from "../services/auth";

interface State {
  user: User;
  token: string;
  logOut: () => void;
  logIn: (credentials: UserCredentials) => Promise<void>;
}

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      user: { email: "", name: "", roles: [], permissions: [] },
      token: "",
      logOut: () => set({ user: { email: "", name: "", roles: [], permissions: [] }, token: "" }),
      logIn: async ({ email, password }: UserCredentials) => {
        try {
          const response = await postUserCredentials({ email, password });
          set({ user: response.user, token: response.token });
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message);
          } else {
            throw new Error('An unexpected error occurred');
          }
        }
      },
    }),
    {
      name: "auth",
    }
  )
);
