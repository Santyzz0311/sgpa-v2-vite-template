import { PUBLIC_ROUTES } from "@utils/enums/routes"
import { Navigate, Outlet } from "react-router-dom"

interface Props {
  isAllowed: boolean
  redirectTo?: PUBLIC_ROUTES
}

function ProtectedRoute({ isAllowed, redirectTo = PUBLIC_ROUTES.LOGIN }: Props) {
  return isAllowed
    ? <Outlet />
    : <Navigate replace to={redirectTo} />
}

export default ProtectedRoute