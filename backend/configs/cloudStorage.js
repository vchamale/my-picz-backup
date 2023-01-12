import { Storage } from '@google-cloud/storage'
import { URL } from 'url'
import * as path from 'path'

// TODO: Get bucket name from env file.
// import dotenv from 'dotenv'
// dotenv.config()

// Building path to GCS Key
const __dirname = decodeURI(new URL('.', import.meta.url).pathname)
export const gc = new Storage({
  keyFilename: path.join(__dirname, '../my-picz-ac2504d0647f.json'),
  projectId: 'my-picz'
})

// Get all buckets:
//gc.getBuckets().then((x) => console.log(x))
