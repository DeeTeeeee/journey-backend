import {Request, Response} from 'express'
import {TravelTrip} from '@models/travelTrip'

export const createTravelTrip = async (req: Request, res: Response) => {
  const {name, imagesVideos} = req.body
  const newTravelTrip = new TravelTrip({
    name,
    imagesVideos,
  })
  const listTravelTrip = await TravelTrip.find()
  if (imagesVideos && imagesVideos.length) {
    newTravelTrip.imageCover = imagesVideos[0]
  }

  newTravelTrip.index = listTravelTrip && listTravelTrip.length + 1

  await newTravelTrip.save()
  return res.send({status: true, data: newTravelTrip})
}

export const updateTravelTrip = async (req: Request, res: Response) => {
  const {id, imagesVideos} = req.body
  if (!Array.isArray(imagesVideos)) return res.status(400).send({status: false, message: 'ImagesVideos is not an array'})
  const travelTrip = await TravelTrip.findOne({_id: id})
  travelTrip.imagesVideos = [...travelTrip.imagesVideos, ...imagesVideos]
  await travelTrip.save()
  return res.send({status: true, data: travelTrip})
}

export const getListTravelTrip = async (req: Request, res: Response) => {
  const listTravelTrip = await TravelTrip.find()
  return res.send({status: true, data: listTravelTrip})
}

export const getTravelTripById = async (req: Request, res: Response) => {
  const id = req.params.id
  const travelTrip = await TravelTrip.findOne({_id: id})
  return res.send({status: true, data: travelTrip})
}
