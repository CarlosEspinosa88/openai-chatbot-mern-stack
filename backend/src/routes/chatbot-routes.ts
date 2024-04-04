import { Router } from 'express'
import { verifyToken } from '../utils/token-manager.js'
import { validate, chatCompletionValidator } from '../utils/validators.js'
import { generateChatCompletion } from '../controllers/chats-controllers.js'

const chatbotRoutes = Router()

chatbotRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatCompletion)

export default chatbotRoutes