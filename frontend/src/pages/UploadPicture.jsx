import { useState } from 'react'
import Dropzone from '../components/Dropzone'
import AlbumModal from '../components/AlbumModal'
const UploadPicture = () => {
  const [selectedImages, setSelectedImages] = useState([])
  const [show, setShow] = useState(true)
  return (
    <>
      <div className='bg-white m-3 p-6 rounded-lg shadow'>
        <div>Cargar Fotos</div>

        <Dropzone
          selectedImages={selectedImages}
          setSelectedImages={setSelectedImages}
        />
      </div>
    </>
  )
}

export default UploadPicture
