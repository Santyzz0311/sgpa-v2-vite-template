import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Loading from '@core/components/Loading'
import RoutesWithNotFound from './RoutesWithNotFound'
import PublicRoutesProvider from './PublicRoutesProvider'
import ProtectedRoute from './ProtectedRoute'
import { PRIVATE_ROUTES } from '@utils/enums'
import PrivateRoutesProvider from './PrivateRoutesProvider'

export default function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <RoutesWithNotFound>
          <Route element={<ProtectedRoute isAllowed />}>
            <Route path='/*' element={<PublicRoutesProvider />} />
          </Route>
          <Route element={<ProtectedRoute isAllowed={false} />}>
            <Route path={`${PRIVATE_ROUTES.PRIVATE}/*`} element={<PrivateRoutesProvider />} />
          </Route>
        </RoutesWithNotFound>
      </Suspense>
    </Router>
  )
}
