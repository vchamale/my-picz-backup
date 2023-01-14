import { useState } from 'react'
import Dropzone from '../components/Dropzone'
import Loading from '../components/Loading'
const UploadPicture = () => {
  const [loading, setLoading] = useState(false)

  return (
    <>
      <div className='bg-white m-3 p-6 rounded-lg shadow'>
        <div>Cargar Fotos</div>
        {loading ? (
          <Loading />
        ) : (
          <Dropzone loading={loading} setLoading={setLoading} />
        )}
      </div>
    </>
  )
}

export default UploadPicture
