import { BrowserRouter as Router, Route } from "react-router-dom";
import RoutesWithNotFound from "./RoutesWithNotFound";
import PublicRoutesProvider from "./PublicRoutesProvider";
import ProtectedRoute from "./ProtectedRoute";
import { PRIVATE_ROUTES } from "@utils/enums";
import PrivateRoutesProvider from "./PrivateRoutesProvider";

export default function Routes() {
  return (
    <Router>
      <RoutesWithNotFound>
        <Route element={<ProtectedRoute isAllowed />}>
          <Route path='/*' element={<PublicRoutesProvider />} />
        </Route>
        <Route element={<ProtectedRoute isAllowed={false} />}>
          <Route path={`${PRIVATE_ROUTES.PRIVATE}/*`} element={<PrivateRoutesProvider />} />
        </Route>
      </RoutesWithNotFound>
    </Router>
  )
}