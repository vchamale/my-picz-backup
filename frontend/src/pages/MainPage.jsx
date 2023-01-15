import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axiosClient from '../config/axiosClient'
import Button from '../components/Button'
import Title from '../components/Title'
import { useEffect, useState } from 'react'
import { filterInfo } from '../features/imagesServices'
import { imagesActions } from '../features/imagesSlice'
import Loading from '../components/Loading'
import Photos from '../components/Photos'
import ModalPicz from '../components/ModalPicz'
import { getConfig } from '../config/getConfig'
import Albums from '../components/Albums'

const MainPage = () => {
  const [open, setOpen] = useState(false)

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  //window.scrollTo({ top: 0, left: 0 })

  const getAllData = async () => {
    try {
      const { data } = await axiosClient.get('/images', getConfig())
      const { data: albums } = await axiosClient.get(
        '/images/albums',
        getConfig()
      )
      const { onlyPhotos, albumsWithPhotos } = filterInfo(data)
      dispatch(imagesActions.setAllPhotoAlbums(albumsWithPhotos))
      dispatch(imagesActions.setAllAlbums(albums))
      dispatch(imagesActions.setAllPhotos(onlyPhotos))
      setLoading(false)
    } catch (error) {
      console.log('Ocurrió un error obteniendo multimedia.', error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getAllData()
  }, [])
  const { Default } = useSelector((state) => state.images.photo_album)

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
    dispatch(imagesActions.setSinglePhoto({}))
  }

  return loading ? (
    <div className='bg-white m-6 p-6 rounded-lg shadow flex justify-center '>
      <Loading />
    </div>
  ) : (
    <>
      <div>
        <div>
          <div>
            <Title lightText={'Todas tus '} darkText={'Picz'} />
            <Albums />
            <Title lightText={'Picz sin '} darkText={'Album'} />
            <Photos album={Default} handleOpen={handleOpen} />
          </div>
          <div className='bg-white m-3 p-6 rounded-lg shadow flex justify-center'>
            <div>
              <Link to='images'>
                <Button title={'Subir Fotos'} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalPicz open={open} onClose={handleClose} />
    </>
  )
}

export default MainPage
