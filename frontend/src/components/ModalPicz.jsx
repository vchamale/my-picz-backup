import { Modal } from '@mui/material'
import { useSelector } from 'react-redux'

const ModalPicz = ({ open, onClose }) => {
  const { singlePhoto } = useSelector((state) => state.images)

  return (
    <Modal open={open} onClose={onClose}>
      <div className='bg-gray-200 modalPicz mt-6'>
        <img src={singlePhoto.url} alt='' />
        <div className='my-2 py-2'>
          <span>{singlePhoto.photo_description}</span>
        </div>
      </div>
    </Modal>
  )
}

export default ModalPicz
