import { gc } from '../configs/cloudStorage.js'
import { v4 } from 'uuid'

const uploadImage = ({ file }, id_end_user) => {
  return new Promise((resolve, reject) => {
    const bucket = gc.bucket('my-picz')

    if (!file) {
      reject('Por favor, agrega un archivo.')
      return
    }

    const { name, data } = file

    const temp = name.split('.')

    const extension = temp[temp.length - 1]

    const gcsName = `${id_end_user}/${v4()}` + '.' + extension
    const blob = bucket.file(gcsName)
    const blobStream = blob.createWriteStream()

    blobStream.on('finish', () => {
      resolve(blob.publicUrl())
    })

    blobStream.end(data)
  })
}

export { uploadImage }
