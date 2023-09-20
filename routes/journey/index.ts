import {Request, Response, Router} from 'express'
import {createJourney} from '@services/journey'

const JourneyRouter = Router()

// Create Journey
JourneyRouter.post('/journey', createJourney)

export default JourneyRouter
