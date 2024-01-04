import {Router} from 'express'
import {createTravelTrip, updateTravelTrip, getListTravelTrip, getTravelTripById} from '@services/travelTrip'

const TravelTripRouter = Router()

// Create Journey
TravelTripRouter.post('/travelTrip', createTravelTrip)

// Update Journey
TravelTripRouter.post('/travelTrip/update', updateTravelTrip)

// Get List Journey
TravelTripRouter.get('/travelTrip', getListTravelTrip)

// Get List Journey
TravelTripRouter.get('/travelTrip/:id', getTravelTripById)

export default TravelTripRouter
