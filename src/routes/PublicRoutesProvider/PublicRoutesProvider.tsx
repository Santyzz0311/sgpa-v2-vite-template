import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@utils/enums/routes";
import LogIn from "pages/public/LogIn";
import { Navigate, Route } from "react-router-dom";
import RoutesWithNotFound from "routes/RoutesWithNotFound";

export default function PublicRoutesProvider() {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PRIVATE_ROUTES.PRIVATE} />} />
      <Route path={PUBLIC_ROUTES.LOGIN} element={<LogIn />} />
    </RoutesWithNotFound>
  )
}