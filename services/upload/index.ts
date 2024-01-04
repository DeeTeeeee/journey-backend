import {Request, Response} from 'express'
import {Upload} from '@aws-sdk/lib-storage'
import {S3} from '@aws-sdk/client-s3'
import multer, {memoryStorage} from 'multer'
const storage = memoryStorage()

export const upload = multer({
  storage,
  limits: {fieldSize: 25 * 1024 * 1024},
})

export const handleS3Upload = async (req: Request, res: Response) => {
  const {file} = req
  const s3 = new S3()
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  }
  const result: any = await new Upload({
    client: s3,
    params,
  }).done()
  return res.send({status: true, data: result.Location})
}
