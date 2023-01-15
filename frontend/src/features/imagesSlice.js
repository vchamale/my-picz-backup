import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  photo_album: [],
  albums: [],
  photos: [],
  singlePhoto: {},
  singleAlbum: {}
}

export const imagesSlice = createSlice({
  name: 'Images Slice',
  initialState,
  reducers: {
    setAllPhotoAlbums(state, action) {
      state.photo_album = action.payload
    },
    setAllAlbums(state, action) {
      state.albums = action.payload
    },
    setAllPhotos(state, action) {
      state.photos = action.payload
    },
    setSinglePhoto(state, action) {
      state.singlePhoto = action.payload
    },
    setSingleAlbum(state, action) {
      state.singleAlbum = action.payload
    },
    clearAll(state, action) {
      state.photo_album = []
      state.albums = []
      state.photos = []
    }
  }
})

export const imagesActions = imagesSlice.actions
export default imagesSlice.reducer
