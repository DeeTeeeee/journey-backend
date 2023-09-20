import {Schema,model} from 'mongoose'

interface IJourney {
  name: string
  imagesVideos?: string[]
  imageCover?: string
}
const journeySchema = new Schema<IJourney>({
  name: {
    type: String,
    required: true
  },
  imagesVideos: Array<String>,
  imageCover: Array<String>
})

export const Journey = model<IJourney>('Journey', journeySchema)

// Repository Design Pattern
// 