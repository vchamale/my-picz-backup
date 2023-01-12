import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  photo_album: [],
  albums: []
}

export const imagesSlice = createSlice({
  name: 'Images Slice',
  initialState,
  reducers: {}
})

export const imagesActions = imagesSlice.actions
export default imagesSlice.reducer
