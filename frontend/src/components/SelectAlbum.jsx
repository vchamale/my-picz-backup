const SelectAlbum = ({ album, setAlbum }) => {
  return (
    <>
      <select
        id='albumID'
        className='border w-full p-2 my-3 placeholder-gray-400 rounded-md '
        defaultValue={'DEFAULT'}
        onChange={(e) => setAlbum(e.target.value)}
      >
        <option value='DEFAULT' disabled>
          -- No Album --
        </option>
        <option value={'2'}>Crear Album</option>
        <option value={'3'}>Navidad</option>
      </select>
    </>
  )
}

export default SelectAlbum
