import { useState } from 'react'
import { Link } from 'react-router-dom'
import Alert from '../components/Alert'
import axiosClient from '../config/axiosClient'

const Register = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [biography, setBiography] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [alert, setAlert] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFullName(fullName.trim()) // Deleting extra spaces from name.
    if (fullName.split(' ').length > 2) {
      // Confirming it is not longer than 1 name and 1 last name.
      setAlert({
        msg: 'Ingresa solo un nombre y un apellido',
        error: true
      })
      return
    }

    if ([fullName, email, password, repeatPassword].includes('')) {
      // Checking for blank fields.
      setAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if (password !== repeatPassword) {
      setAlert({
        msg: 'Las contraseñas no coinciden',
        error: true
      })
      return
    }

    if (password.length < 6) {
      // Checking for password length.
      setAlert({
        msg: 'La contraseña debe tener como mínimo 6 caractéres',
        error: true
      })
      return
    }

    setAlert({})

    // Create user in API
    try {
      const name = fullName.split(' ')[0]
      const lastname = fullName.split(' ')[1]
      const { data } = await axiosClient.post(`/users`, {
        name,
        lastname,
        biography,
        email,
        password
      })
      window.scrollTo(0, 0)
      setAlert({
        msg: data.msg,
        error: false
      })

      // Reset variables.
      setFullName('')
      setEmail('')
      setBiography('')
      setPassword('')
      setRepeatPassword('')
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
      <h1 className='text-pink-600 font-black text-6xl capitalize'>
        Crea tu cuenta y guarda tus
        <span className='text-slate-700'> recuerdos</span>
      </h1>

      {msg && <Alert alert={alert} />}

      <form
        onSubmit={handleSubmit}
        className='my-10 bg-white shadow rounded-lg px-10 py-10'
      >
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='name'
          >
            Nombre
          </label>
          <input
            type='text'
            placeholder='Tu nombre y apellido'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            id='name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
            htmlFor='bio'
          >
            Biografía
          </label>
          <input
            type='text'
            placeholder='Escribe un mensaje para tu biografía'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            id='bio'
            value={biography}
            onChange={(e) => setBiography(e.target.value)}
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
        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl font-bold'
            htmlFor='password2'
          >
            Repetir contraseña
          </label>
          <input
            type='password'
            placeholder='Repetir tu contraseña'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            id='password2'
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value='Crear cuenta'
          className='bg-pink-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-pink-800 transition-colors'
        />
      </form>
      <nav className='lg:flex lg:justify-between'>
        <Link
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to='/'
        >
          Ya tienes cuenta? Inicia sesión
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

export default Register
