// const photo_albums = [
//   {
//     album_name: 'Rodadas',
//     id_album: 17,
//     id_photo: 44,
//     photo_description: 'Quiche',
//     url: 'https://storage.googleapis.com/my-picz/9%2F54955e84-af63-44da-b4a5-304941c66358.JPG'
//   },
//   {
//     album_name: 'MyPicz',
//     id_album: 18,
//     id_photo: 45,
//     photo_description: 'picz',
//     url: 'https://storage.googleapis.com/my-picz/9%2F15ed7cae-10f6-44f0-ac9e-490cb0ee3879.png'
//   }
// ]
// function selectAlbumsOnly(element) {
//   const { id_album, album_name } = element
//   return { id_album, album_name }
// }

// const onlyAlbums = photo_albums.map(selectAlbumsOnly)

// function selectPhotosOnly(element) {
//   const { id_photo, photo_description, url } = element
//   return { id_photo, photo_description, url }
// }

// const onlyPhotos = photo_albums.map(selectPhotosOnly)

// albumsWithPhotos = photo_albums.reduce(function (r, a) {
//   r[a.album_name] = r[a.album_name] || []
//   r[a.album_name].push(a)
//   return r
// }, Object.create(null))

// // console.log(albumsWithPhotos)
// import { useSelector } from 'react-redux'

// const { photo_album } = useSelector((state) => state.images)
// console.log(photo_album)
