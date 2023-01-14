import { useSelector } from 'react-redux'

const SelectAlbum = ({ album, setAlbum }) => {
  const { albums } = useSelector((state) => state.images)

  const albumsList =
    albums?.length > 0 &&
    albums.map((item) => {
      if (item.album_name !== 'Favorites') {
        return (
          <option key={item.id_album} value={item.id_album}>
            {item.album_name === 'Default' ? '-- No Album --' : item.album_name}
          </option>
        )
      }
    })

  return (
    <>
      <select
        id='albumID'
        className='border w-full p-2 my-3 placeholder-gray-400 rounded-md '
        defaultValue={'DEFAULT'}
        onChange={(e) => setAlbum(e.target.value)}
      >
        <option value={'DEFAULT'} disabled>
          -- Seleccione un Album --
        </option>
        {albumsList}
        <option value={0}>-- Crear Album --</option>
      </select>
    </>
  )
}

export default SelectAlbum
