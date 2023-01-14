import { Link, useNavigate } from 'react-router-dom'
import Gravatar from 'react-gravatar'
import useAuth from '../hooks/useAuth'
import Button from './Button'
import { imagesActions } from '../features/imagesSlice'
import { useDispatch } from 'react-redux'

const Header = ({ linkTo, linkName }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { auth } = useAuth()
  const handleLogout = () => {
    localStorage.removeItem('token')
    dispatch(imagesActions.clearAll())
    navigate('/')
  }

  return (
    <header className='px-4 py-5 bg-white border-b shadow'>
      <div className='md:flex md:justify-between'>
        <div className=' '>
          <Link to='/dashboard'>
            <h2 className='text-4xl text-rose-600 font-black text-center mb-1'>
              My Picz
            </h2>
          </Link>
          <div>
            <Gravatar
              email={auth.email}
              size={150}
              rating='pg'
              default='monsterid'
              className='CustomAvatar-image shadow-lg'
              protocol='https://'
              style={{ borderRadius: '9999px' }}
            />
          </div>
        </div>
        <h3 className='p-2 font-bold  uppercase'>{`"${auth.biography}"`}</h3>
        <div className='flex items-center gap-4'>
          <Link to={linkTo} className='font-bold uppercase'>
            {' '}
            {linkName}{' '}
          </Link>

          <Button title={'Cerrar Sesión'} onClickAction={handleLogout} />
        </div>
      </div>
    </header>
  )
}

export default Header
