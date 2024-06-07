import { useAuthStore } from '../stores/auth'
export default function useAuth() {
  const user = useAuthStore((state) => state.user)
  const logOut = useAuthStore((state) => state.logOut)
  const logIn = useAuthStore((state) => state.logIn)

  return {
    user, 
    logOut,
    logIn,
  }
}
