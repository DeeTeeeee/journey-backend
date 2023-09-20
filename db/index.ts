import mongoose, {ConnectOptions} from 'mongoose'

export const initDatabase = () => {
  const db = mongoose.connection
  mongoose.connect(
    process.env.DATABASE_URL as string,
    {useNewUrlParser: true, dbName: process.env.DATABASE_NAME} as ConnectOptions,
  )
  db.on('error', (error: any) => error)
  db.once('open', () => console.log('Database is connected'))
}