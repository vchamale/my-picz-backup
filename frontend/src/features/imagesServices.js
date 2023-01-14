export const filterInfo = (data) => {
  function selectPhotosOnly(element) {
    const { id_photo, photo_description, url } = element
    return { id_photo, photo_description, url }
  }
  const onlyPhotos = data.map(selectPhotosOnly)

  const albumsWithPhotos = data.reduce(function (r, a) {
    r[a.album_name] = r[a.album_name] || []
    r[a.album_name].push(a)
    return r
  }, Object.create(null))

  return { albumsWithPhotos, onlyPhotos }
}
