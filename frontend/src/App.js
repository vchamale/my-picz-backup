import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import AuthLayout from './layouts/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import NewPassword from './pages/NewPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import MainPage from './pages/MainPage'
import CreateAlbum from './pages/CreateAlbum'
import ProtectedRoutes from './layouts/ProtectedRoutes'
import UploadPicture from './pages/UploadPicture'
import AlbumView from './pages/AlbumView'
import { useSelector } from 'react-redux'

function App() {
  const { singleAlbum } = useSelector((state) => state.images)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path='/' element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgot_password' element={<ForgotPassword />} />
            <Route path='forgot_password/:token' element={<NewPassword />} />
            <Route path='confirm_account/:id' element={<ConfirmAccount />} />
          </Route>
          {/* Private Routes
           */}
          <Route path='/dashboard' element={<ProtectedRoutes />}>
            <Route index element={<MainPage />} />
            <Route path='create_album' element={<CreateAlbum />} />
            <Route path='images' element={<UploadPicture />} />
            <Route path='albums' element={<AlbumView album={singleAlbum} />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
