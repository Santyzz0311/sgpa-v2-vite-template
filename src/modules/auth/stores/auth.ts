import { create } from "zustand"
import { persist } from "zustand/middleware"
import { User, UserCredentials } from "@utils/types"
// import { postUserCredentials } from "../services/auth"

interface State {
  user: User
  token: string
  logOut: () => void
  logIn: (credentials: UserCredentials) => Promise<void> | void
}

export const useAuthStore = create<State>()(
  persist(
    (set) => ({
      user: { email: "", name: "", roles: [], permissions: [] },
      token: "",
      logOut: () => set({ user: { email: "", name: "", roles: [], permissions: [] }, token: "" }),
      logIn: ({ email }: UserCredentials) => {
        set({ 
          user: { 
            email, 
            name: "Santiago", 
            roles: ["admin"], 
            permissions: ["fdsasd04"] 
          }, 
          token: "fdhgfds564765frd54e45" 
        })
      },
      // logIn: async ({ email, password }: UserCredentials) => {
      //   try {
      //     const response = await postUserCredentials({ email, password })
      //     set({ user: response.user, token: response.token })
      //   } catch (error: unknown) {
      //     if (error instanceof Error) {
      //       throw new Error(error.message)
      //     } else {
      //       throw new Error('An unexpected error occurred')
      //     }
      //   }
      // },
    }),
    {
      name: "auth"
    }
  )
)
