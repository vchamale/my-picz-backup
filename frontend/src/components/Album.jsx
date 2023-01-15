import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { imagesActions } from '../features/imagesSlice'

const Album = ({ album }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const imagesList =
    album?.length > 0 &&
    album.slice(0, 4).map((item) => {
      return (
        <img
          key={item.id_photo}
          src={item.url}
          alt='loading'
          className='my-auto'
        />
      )
    })

  const handleAlbumOnClick = () => {
    dispatch(imagesActions.setSingleAlbum(album))
    navigate('albums')
  }

  return (
    <div
      key={album[0].id_album}
      className='w-64 h-64 m-6 shadow rounded-lg border-2 border-gray-300 hover:cursor-pointer bg-gray-100'
      onClick={handleAlbumOnClick}
    >
      <div className=' m-1 p-2  border-b-2 border-gray-400 bg-white rounded'>
        <h3 className='font-bold text-xl text-gray-500 '>
          {album[0].album_name}
        </h3>
      </div>
      <div className='container  grid grid-cols-2 gap-3 mx-auto my-3 p-3 bg-gray-100 photos'>
        {imagesList}
      </div>
    </div>
  )
}

export default Album
