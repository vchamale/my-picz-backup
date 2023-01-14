import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axiosClient from '../config/axiosClient'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import SelectAlbum from './SelectAlbum'
import { useEffect } from 'react'

const Dropzone = ({ loading, setLoading }) => {
  const [album, setAlbum] = useState('DEFAULT')
  const [newAlbumName, setNewAlbumName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedImages, setSelectedImages] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    )
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })
  const selected_images = selectedImages?.map((file) => (
    <div key={file.preview}>
      <img
        src={file.preview}
        style={{ width: '200' }}
        alt='loading'
        key={file.preview}
      />
    </div>
  ))

  const onSave = async (photos) => {
    if (photos.length === 0) console.log('Please upload your image!', 'error')

    try {
      setLoading(true)

      const formData = new FormData()

      formData.append('url', selectedImages[0])

      const token = localStorage.getItem('token') || 'invalid token'

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      }

      const { data } = await axiosClient.post(
        '/images',
        {
          file: formData.getAll('url')[0],
          description,
          album,
          newAlbumName
        },
        config
      )

      console.log(data.msg, 'success')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setAlbum('DEFAULT')
    }
  }
  return (
    <>
      <div className=' p-3 m-6   border rounded-lg'>
        <div {...getRootProps()} className='p-6 '>
          <input {...getInputProps()} />

          <p>Arrastra tus fotos o selecciona desde tu equipo.</p>
        </div>
        {selected_images}
        <div className='m-3 p-3 text-center'>
          {selectedImages.length > 0 && (
            <div className='flex justify-center flex-col'>
              <label htmlFor='description' className='text-left'>
                {' '}
                Descripción:{' '}
              </label>
              <input
                id='description'
                type='text'
                placeholder='Agrega una descripción'
                className='my-2 bg-gray-100 p-3 rounded-lg'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <SelectAlbum album={album} setAlbum={setAlbum} />
              {album == 0 ? (
                <>
                  <label htmlFor='album' className=' text-left '>
                    {' '}
                    Album Nuevo:{' '}
                  </label>
                  <input
                    id='album'
                    type='text'
                    placeholder='Ingrese nombre para nuevo Album'
                    className='my-2 bg-gray-100 p-3 rounded-lg'
                    value={newAlbumName}
                    onChange={(e) => setNewAlbumName(e.target.value)}
                  />
                </>
              ) : (
                <></>
              )}
              <Button
                title={'Guardar'}
                onClickAction={(e) => onSave(selectedImages[0])}
              />
            </div>
          )}
        </div>
        <div>
          <Link to='/dashboard'>
            <Button title={'Volver'} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Dropzone
