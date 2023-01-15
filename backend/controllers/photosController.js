import pool from '../configs/db.js'
import { uploadImage } from '../helpers/uploadImage.js'

const saveImage = async (req, res) => {
  const file = req.files
  const { description, album, newAlbumName } = req.body
  const id_end_user = req.user.rows[0].id_end_user
  const url = await uploadImage(file, id_end_user)
  let id_album = album == 'DEFAULT' ? album : album

  // If new album selected, create it.
  if (album == 0) {
    try {
      const createNewAlbum = await pool.query(
        `INSERT INTO album ( name, id_end_user)
                    VALUES ($1, $2) RETURNING *`,
        [newAlbumName, id_end_user]
      )
      id_album = createNewAlbum.rows[0].id_album
    } catch (error) {
      console.log('Ocurrió un error al guardar el album. ', error)
    }
  }

  // Save Image to an existing album.
  try {
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

const getAllMedia = async (req, res) => {
  const id_end_user = req.user.rows[0].id_end_user

  try {
    const getAll = await pool.query(
      `SELECT pa.id_photo as id_photo, p.url as url, p.description as photo_description, pa.id_album as id_album, a.name as album_name 
      FROM photo_album pa
      INNER JOIN photo p
      ON pa.id_photo = p.id_photo
      INNER JOIN album a
      ON pa.id_album = a.id_album
      WHERE a.id_end_user = ($1)
      ORDER BY pa.id_album ASC`,
      [id_end_user]
    )

    res.json(getAll.rows)
  } catch (error) {
    console.log('Hubo un error obteniendo todos los albums.', error)
  }
}

const getAlbums = async (req, res) => {
  const id_end_user = req.user.rows[0].id_end_user

  try {
    const getAlbumsOnly = await pool.query(
      `SELECT id_album, name as album_name FROM album WHERE id_end_user = $1 ORDER BY id_album`,
      [id_end_user]
    )

    res.json(getAlbumsOnly.rows)
  } catch (error) {
    console.log('Hubo un error obteniendo los Albums.', error)
  }
}

const deletePicture = async (req, res) => {
  // const id_end_user = req.user.rows[0].id_end_user
  const { id_photo } = req.params

  try {
    const deleteFromPhotoAlbum = await pool.query(
      `DELETE FROM photo_album WHERE id_photo = $1`,
      [id_photo]
    )

    const deleteSinglePicture = await pool.query(
      `DELETE FROM photo WHERE id_photo = $1`,
      [id_photo]
    )

    res.status(201).json({
      msg: 'Foto eliminada con exito.'
    })
  } catch (error) {
    console.log('Hubo un error obteniendo los Albums.', error)
  }
}

const deleteAlbum = async (req, res) => {
  // const id_end_user = req.user.rows[0].id_end_user
  const { id_album } = req.params
  console.log('si se esta mandando a llamar borrar el album: ', id_album)

  try {
    const deleteFromPhotoAlbum = await pool.query(
      `DELETE FROM photo_album WHERE id_album = $1`,
      [id_album]
    )

    const deleteSinglePicture = await pool.query(
      `DELETE FROM album WHERE id_album = $1`,
      [id_album]
    )

    res.status(201).json({
      msg: 'Foto eliminada con exito.'
    })
  } catch (error) {
    console.log('Hubo un error obteniendo los Albums.', error)
  }
}

export { saveImage, getAllMedia, getAlbums, deletePicture, deleteAlbum }
