import {GeneralInformation} from '@models/generaInformation'
import {Request, Response} from 'express'

export const updateGeneralInformation = async (req: Request, res: Response) => {
  const {maleImage, femaleImage} = req.body
  const generaInformationData = await GeneralInformation.find()
  if (!generaInformationData.length) {
    const newGeneralInformation = new GeneralInformation({
      maleImage,
      femaleImage,
    })
    await newGeneralInformation.save()
    return res.send({status: true, data: newGeneralInformation})
  } else {
    generaInformationData[0].maleImage = maleImage
    generaInformationData[0].femaleImage = femaleImage
    await generaInformationData[0].save()
    return res.status(200).send({data: generaInformationData[0]})
  }
}

export const getGeneralInformation = async (req: Request, res: Response) => {
  const generaInformationData = await GeneralInformation.find()
  return res.status(200).send({data: generaInformationData[0] ?? []})
}
