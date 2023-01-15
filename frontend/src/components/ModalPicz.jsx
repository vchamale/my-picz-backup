import { Modal } from '@mui/material'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axiosClient from '../config/axiosClient'
import { getConfig } from '../config/getConfig'
import DeleteButton from './DeleteButton'

const ModalPicz = ({ open, onClose }) => {
  const navigate = useNavigate()
  const { singlePhoto } = useSelector((state) => state.images)

  const onDelete = async () => {
    const id_photo = singlePhoto.id_photo

    const deletePhoto = await axiosClient.delete(
      `/images/${id_photo}`,
      getConfig()
    )
    navigate('/dashboard')
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className='bg-gray-200 modalPicz mt-6  '>
        <img
          src={singlePhoto.url}
          alt=''
          className=' shadow-lg rounded-lg mb-3 '
        />
        <div className='my-2 py-6 text-xl font-bold text-gray-500 text-center bg-white rounded-lg shadow-md'>
          <span>{singlePhoto.photo_description}</span>
        </div>
        <DeleteButton title={'Foto'} onClickAction={onDelete} />
      </div>
    </Modal>
  )
}

export default ModalPicz
