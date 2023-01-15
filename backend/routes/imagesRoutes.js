import express from 'express'
import {
  saveImage,
  getAllMedia,
  getAlbums,
  deletePicture,
  deleteAlbum
} from '../controllers/photosController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router.get('/', checkAuth, getAllMedia)
router.get('/albums', checkAuth, getAlbums)
router.post('/', checkAuth, saveImage)
router.delete('/:id_photo', checkAuth, deletePicture)
router.delete('/albums/:id_album', checkAuth, deleteAlbum)

export default router
