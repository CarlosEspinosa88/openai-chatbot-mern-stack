import { Router } from 'express'
import { getAllusers } from '../controllers/user-controllers.js'

const userRoutes = Router()
userRoutes.get("/", getAllusers)

export default userRoutes