import express from 'express'
import {
  saveImage,
  getAllMedia,
  getAlbums
} from '../controllers/photosController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router.get('/', checkAuth, getAllMedia)
router.get('/albums', checkAuth, getAlbums)
router.post('/', checkAuth, saveImage)

export default router
