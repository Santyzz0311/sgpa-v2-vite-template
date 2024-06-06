import { lazy } from "react";
import { PRIVATE_ROUTES } from "@utils/enums";
const Home = lazy(() => import("@pages/private/Home"))
import { Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "../RoutesWithNotFound";

export default function PrivateRoutesProvider() {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PRIVATE_ROUTES.HOME} />} />
      <Route path={PRIVATE_ROUTES.HOME} element={<Home />} />
    </RoutesWithNotFound>
  )
}