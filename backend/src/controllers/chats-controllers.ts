import { Request, Response, NextFunction, RequestHandler  } from "express"
import { configureOpenAI } from "../config/openai.js";
import { OpenAIApi, ChatCompletionRequestMessage } from "openai"
import User from "../models/User.js";

export const generateChatCompletion = async (
  res: Response,
  req: Request,
  next: NextFunction
) => { 
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id)
  
    if (!user) {
      return res.status(401).json({ message: "User not registered or Tken malfunctioned" })
    }
  
    // grab all chats from the user
    const chats = user.chats.map(({ role, content }) => ({ role, content })) as ChatCompletionRequestMessage[]
    chats.push({ content: message, role: "user" })
    user.chats.push({ content: message, role: "user" })
    
    // send all chat to the openai api
    const config = configureOpenAI()
    const openai = new OpenAIApi(config)
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chats
     })

  
    // get latest response
    user.chats.push(chatResponse.data.choices[0].message)
    await user.save()
  
    // return the chats and the status
    return res.status(200).json({ chats: user.chats })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong"})
  }
}