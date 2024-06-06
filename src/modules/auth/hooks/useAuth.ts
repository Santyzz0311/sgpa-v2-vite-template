import { useAuthStore } from '../stores/auth'
export const useAuth = () => {
  const user = useAuthStore((state) => state.user)
  const logOut = useAuthStore((state) => state.logOut)

  return {
    user, 
    logOut
  }
};
