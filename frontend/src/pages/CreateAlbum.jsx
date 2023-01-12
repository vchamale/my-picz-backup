import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Title from '../components/Title'

const CreateAlbum = () => {
  return (
    <div className='bg-white m-3 p-6 rounded-lg shadow'>
      <Title lightText={'Crea un'} darkText={'Album'} />
      <div>Desde Create Album</div>
      <div>
        <Link to='/dashboard'>
          <Button title={'Volver'} />
        </Link>
      </div>
    </div>
  )
}

export default CreateAlbum
