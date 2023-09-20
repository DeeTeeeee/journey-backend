import {IFileType} from './types/files'
const {Upload} = require('@aws-sdk/lib-storage')
const {S3} = require('@aws-sdk/client-s3')

export const s3Upload = async (file: IFileType) => {
  const s3 = new S3()
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  }
  return await new Upload({
    client: s3,
    params,
  }).done()
}
