import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Header from '../components/Header'

const ProtectedRoutes = () => {
  const { auth, loading } = useAuth()

  if (loading) return 'Cargando...'

  return (
    <>
      {auth.id_end_user ? (
        <div className='bg-gray-100'>
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to='/' />
      )}
    </>
  )
}

export default ProtectedRoutes
