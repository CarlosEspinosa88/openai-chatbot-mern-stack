import { Router } from 'express'
import { verifyToken } from '../utils/token-manager.js'
import { validate, chatCompletionValidator } from '../utils/validators.js'
import { deleteChats, generateChatCompletion, sendChatToUser } from '../controllers/chats-controllers.js'

const chatbotRoutes = Router()

chatbotRoutes.post(
  "/new",
  validate(chatCompletionValidator),
  verifyToken,
  generateChatCompletion
)

chatbotRoutes.get(
  "/all-chats",
  verifyToken,
  sendChatToUser
)

chatbotRoutes.delete(
  "/delete",
  verifyToken,
  deleteChats
)

export default chatbotRoutes