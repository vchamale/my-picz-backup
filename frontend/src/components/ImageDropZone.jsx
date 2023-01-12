import { useCallback, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'

function ImageDropZone({ value, onChange }) {
  const [loading, setLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    setLoading(true)
    setLoading(false)
  })

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*'
  })

  return (
    <div {...getRootProps()} className='drop-zone my-3'>
      <input {...getInputProps()} />
      {value ? (
        <img className='img-dz' src={value} alt={'loadingImage'} />
      ) : loading ? (
        <Spinner variant='standard' animation='border' role='status' />
      ) : (
        <p> Arrastra y tu foto o haz click para buscar en tu equipo. </p>
      )}
    </div>
  )
}

export default ImageDropZone
