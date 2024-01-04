import {Schema, model} from 'mongoose'

interface IGeneralInformation {
  maleImage: string
  femaleImage: string
}
const generalInformationSchema = new Schema<IGeneralInformation>({
  maleImage: {
    type: String,
    default: ''
  },
  femaleImage: {
    type: String,
    default: ''
  },
})

export const GeneralInformation = model<IGeneralInformation>('GeneralInformation', generalInformationSchema)
