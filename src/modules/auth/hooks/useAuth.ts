import { useAuthStore } from '../stores/auth'
export default function useAuth() {
  const user = useAuthStore((state) => state.user)
  const logOut = useAuthStore((state) => state.logOut)
  const logIn = useAuthStore((state) => state.logIn)
  const token = useAuthStore((state) => state.token)

  return {
    user, 
    logOut,
    logIn,
    token
  }
}
