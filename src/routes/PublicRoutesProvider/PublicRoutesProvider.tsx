import { lazy } from "react";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@utils/enums/routes";
import { Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "../RoutesWithNotFound";
const LogIn = lazy(() => import('@pages/public/LogIn'))

export default function PublicRoutesProvider() {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PRIVATE_ROUTES.PRIVATE} />} />
      <Route path={PUBLIC_ROUTES.LOGIN} element={<LogIn />} />
    </RoutesWithNotFound>
  )
}