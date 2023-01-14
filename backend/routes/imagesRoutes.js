import express from 'express'
import { saveImage } from '../controllers/photosController.js'
import checkAuth from '../middlewares/checkAuth.js'

const router = express.Router()

router.post('/', checkAuth, saveImage)

export default router
