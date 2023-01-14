import Photo from './Photo'

const Photos = ({ album, handleOpen }) => {
  const imagesList =
    album?.length > 0 &&
    album.map((item) => {
      return <Photo key={item.id_photo} image={item} handleOpen={handleOpen} />
    })
  return (
    <div className='container grid grid-cols-3 gap-6 mx-auto my-6 p-3'>
      {imagesList}
    </div>
  )
}

export default Photos
