import {Router} from 'express'
import {handleS3Upload, upload} from '@services/upload'

const UploadRouter = Router()

// Create Journey
UploadRouter.post('/upload', upload.single('file'), handleS3Upload)

export default UploadRouter
