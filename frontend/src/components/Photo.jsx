import { useDispatch } from 'react-redux'
import { imagesActions } from '../features/imagesSlice'

const Photo = ({ image, handleOpen }) => {
  const dispatch = useDispatch()

  const handleOnClick = () => {
    handleOpen()
    dispatch(imagesActions.setSinglePhoto(image))
  }

  return (
    <div
      className='w-full rounded-lg my-auto bg-white photos shadow-lg hover:cursor-pointer'
      id={image.id_photo}
      onClick={handleOnClick}
    >
      <img src={image.url} alt='loading' />
    </div>
  )
}

export default Photo
