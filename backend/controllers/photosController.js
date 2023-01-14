import pool from '../configs/db.js'
import { uploadImage } from '../helpers/uploadImage.js'

const saveImage = async (req, res) => {
  try {
    const file = req.files
    const { description, album } = req.body
    const id_end_user = req.user.rows[0].id_end_user
    const url = await uploadImage(file, id_end_user)
    const id_album = album == 'DEFAULT' ? 1 : album

    const uploadImageDB = await pool.query(
      `INSERT INTO photo ( url, description, id_end_user)
                  VALUES ($1, $2, $3) RETURNING *`,
      [url, description, id_end_user]
    )

    const photo_album = await pool.query(
      `INSERT INTO photo_album ( id_photo, id_album )
                  VALUES ($1, $2 ) RETURNING *`,
      [uploadImageDB.rows[0].id_photo, id_album]
    )

    res.status(201).json({
      msg: 'Foto almacenada exitosamente.'
    })
  } catch (error) {
    console.log('Ocurrió un error.', error)

    res.status(500).json({
      msg: error
    })
  }
}

export { saveImage }
