import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@core/components/Loading'
import RoutesWithNotFound from './RoutesWithNotFound'
import PublicRoutesProvider from './PublicRoutesProvider'
import ProtectedRoute from './ProtectedRoute'
import { PRIVATE_ROUTES } from '@utils/enums'
import PrivateRoutesProvider from './PrivateRoutesProvider'
import { useAuthStore } from '@auth/stores/auth'

export default function Routes() {
  const token = useAuthStore((state) => state.token)

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <RoutesWithNotFound>
          <Route element={<ProtectedRoute isAllowed={!token} redirectTo={PRIVATE_ROUTES.PRIVATE} />}>
            <Route path='/*' element={<PublicRoutesProvider />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={!!token} />}>
            <Route path={`${PRIVATE_ROUTES.PRIVATE}/*`} element={<PrivateRoutesProvider />} />
          </Route>
        </RoutesWithNotFound>
      </Suspense>
    </Router>
  )
}
