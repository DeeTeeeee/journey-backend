import {Schema, model} from 'mongoose'

interface ITravelTrip {
  name: string
  index: number
  imagesVideos?: string[]
  imageCover?: string
}
const travelTripSchema = new Schema<ITravelTrip>({
  name: {
    type: String,
    required: true,
  },
  index: {
    type: Number,
    required: true
  },
  imagesVideos: Array<String>,
  imageCover: String,
})

export const TravelTrip = model<ITravelTrip>('TravelTrip', travelTripSchema)
