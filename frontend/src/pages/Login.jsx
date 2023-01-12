import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Alert from '../components/Alert'
import useAuth from '../hooks/useAuth'
import logo from '../img/logo.png'
import axiosClient from '../config/axiosClient'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({})

  const navigate = useNavigate()
  const { setAuth } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if ([email, password].includes('')) {
      setAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
    }

    try {
      const { data } = await axiosClient.post('/users/login', {
        email,
        password
      })
      setAlert({})
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate('/dashboard')
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alert

  return (
    <>
      <div className='w-full flex  justify-center '>
        <img src={logo} alt='Logo' />
      </div>
      {msg && <Alert alert={alert} />}
      <form
        onSubmit={handleSubmit}
        className='bg-white mb-10 mt-5 shadow rounded-lg px-10 py-10'
      >
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='email'
          >
            Correo Electrónico
          </label>
          <input
            type='email'
            placeholder='Email de registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password'
          >
            Contraseña
          </label>
          <input
            type='password'
            placeholder='Contraseña de registro'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Iniciar Sesión'
          className='bg-pink-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-800 transition-colors'
        />
      </form>
      <nav className='lg:flex lg:justify-between'>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to='/register'
        >
          No tienes cuenta? Regístrate
        </Link>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to='/forgot_password'
        >
          Olvidé mi contraseña
        </Link>
      </nav>
    </>
  )
}

export default Login
