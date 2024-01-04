import express from 'express'
import 'module-alias/register'
import {Request, Response} from 'express'
// import {s3Upload} from './s3Service'
import JourneyRouter from '@routes/travelTrip'
import {initDatabase} from '@db/index'
import UploadRouter from '@routes/upload'
import GeneralInformationRouter from '@routes/generalInformation'

require('dotenv').config()

const app = express()
const port = process.env.PORT

// const multer = require('multer')
initDatabase()

const allowCrossDomain = function(req: Request, res: Response, next: () => void) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain)
app.use(express.json())
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

app.use('/api', JourneyRouter)
app.use('/api', UploadRouter)
app.use('/api', GeneralInformationRouter)

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
