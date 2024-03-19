import { Router } from 'express'
import userRoutes from './user-routes.js'
import chatbotRoutes from './chatbot-routes.js'

const appRouter = Router()

appRouter.use('/user', userRoutes) // domain/api/v1/user
appRouter.use('/chats', chatbotRoutes) // domain/api/v1/chats

export default appRouter