import React, { Suspense } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Loading from '../components/atoms/Loading'

const People = React.lazy(() => import('../pages/people/People'))
const PeopleDetail = React.lazy(() => import('../pages/people/PeopleDetail'))
const Favourite = React.lazy(() => import('../pages/favourite/Favourite'))

const MainRoutes = () => (
  <section className="sm:pt-24 pt-[5rem] pb-6">
    <Suspense
      fallback={
        <div className="flex justify-center pt-10">
          <Loading />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PeopleDetail />} />
          <Route path="/favourite" element={<Favourite />} />

          <Route path="/" element={<Navigate replace to="/people" />} />
        </Route>
      </Routes>
    </Suspense>
  </section>
)

export default MainRoutes
