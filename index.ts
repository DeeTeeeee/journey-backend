import express from 'express'
import 'module-alias/register'
import {Request, Response} from 'express'
// import {s3Upload} from './s3Service'
// import mongoose, {ConnectOptions} from 'mongoose'
import JourneyRouter from '@routes/journey'
import {initDatabase} from '@db/index'

require('dotenv').config()

// const db = mongoose.connection
const app = express()
const port = process.env.PORT

// mongoose.connect(
//   process.env.DATABASE_URL as string,
//   {useNewUrlParser: true, dbName: process.env.DATABASE_NAME} as ConnectOptions,
// )

// db.on('error', (error: any) => error)
// db.once('open', () => console.log('Database is connected'))

// const multer = require('multer')
initDatabase()

app.use(express.json())
app.use('/api', JourneyRouter)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// const storage = multer.memoryStorage()

// const fileFilter = (req: Request, file: any, cb: any) => {
//   if (file.mimetype.split('/')[0] === 'image') {
//     cb(null, true)
//   } else {
//     cb(new multer.MulterError('abc'), false)
//   }
// }

// const upload = multer({
//   storage,
//   fileFilter,
//   limits: {fileSize: 1000000, files: 2},
// })

// app.post('/upload', upload.array('files'), async (req: any, res: Response) => {
//   const file = req.files?.[0]
//   const result = await s3Upload(file)
//   res.json({status: 'Success', result})
// })
