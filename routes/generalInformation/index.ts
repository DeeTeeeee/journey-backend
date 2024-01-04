import { getGeneralInformation, updateGeneralInformation } from '@services/generalInformation'
import {Router} from 'express'

const GeneralInformationRouter = Router()


// Update General Information
GeneralInformationRouter.post('/generalInformation/update', updateGeneralInformation)

// Get General Information
GeneralInformationRouter.get('/generalInformation', getGeneralInformation)


export default GeneralInformationRouter
