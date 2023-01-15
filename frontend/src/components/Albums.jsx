import { useSelector } from 'react-redux'
import Album from './Album'

const Albums = () => {
  const { photo_album } = useSelector((state) => state.images)

  const photoAlbumList = Object.keys(photo_album).map((album) => {
    if (album !== 'Default') {
      return <Album key={album} album={photo_album[album]} />
    }
  })

  return (
    <div className='w-full bg-white shadow-md mx-3 my-6 p-6 rounded-lg'>
      <div className=' w-full p-2 my-2 border-b-2 border-gray-400 '>
        {' '}
        <h3 className='font-bold text-2xl text-gray-600 '>Albums</h3>{' '}
      </div>

      <div className='flex flex-wrap'>{photoAlbumList}</div>
    </div>
  )
}

export default Albums
