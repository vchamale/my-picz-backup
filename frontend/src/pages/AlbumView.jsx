import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { imagesActions } from '../features/imagesSlice'
import Photos from '../components/Photos'
import ModalPicz from '../components/ModalPicz'
import Title from '../components/Title'
import Button from '../components/Button'
import { getConfig } from '../config/getConfig'
import axiosClient from '../config/axiosClient'

const AlbumView = ({ album }) => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { singleAlbum } = useSelector((state) => state.images)

  const onDelete = async () => {
    const id_album = singleAlbum[0].id_album
    console.log(id_album, 'this')

    const deleteAlbum = await axiosClient.delete(
      `/images/albums/${id_album}`,
      getConfig()
    )
    navigate('/dashboard')
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    dispatch(imagesActions.setSinglePhoto({}))
  }

  return (
    <>
      <Title lightText={album[0].album_name} />
      <Photos album={album} handleOpen={handleOpen} />
      <ModalPicz open={open} onClose={handleClose} />

      <div className='bg-white m-3 p-6 rounded-lg shadow flex justify-center gap-2'>
        <div>
          <Link to='/dashboard/images'>
            <Button title={'Eliminar Album'} onClickAction={onDelete} />
          </Link>
        </div>
        <div>
          <Link to='/dashboard/images'>
            <Button title={'Subir Fotos'} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default AlbumView
