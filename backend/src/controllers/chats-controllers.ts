import { Request, Response, NextFunction } from "express"
import OpenAI from "openai"
import User from "../models/User.js";
import { config } from "dotenv"

config({ path: './.env'})

const configOpenAI = new OpenAI({
  apiKey: process.env.OPEN_AI_SECRET,
  organization: process.env.OPEN_AI_ORGANIZATION_ID,
})

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id)

    if (!user) {
      return res.status(401).json({ message: "User not registered or Tken malfunctioned" })
    } 

    // grab all chats from the user
    const chats = user.chats.map(({ role, content }) => ({ role, content })) as OpenAI.ChatCompletionUserMessageParam[]
    chats.push({ content: message, role: "user" })
    user.chats.push({ content: message, role: "user" })

    // send all chat to the openai api
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: chats,
      model: "gpt-3.5-turbo",
      // n: 1
    };

    const chatResponse = await configOpenAI.chat.completions.create(params)

    // get latest response
    user.chats.push(chatResponse.choices[0]?.message)
    await user.save()

    // return the chats and the status
    return res.status(200).json({ chats: user.chats })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Something went wrong"})
  }
}

export const sendChatToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id)

    if (!user) {
      return res.status(401).send("User not registered or Token malfunctioned")
    }

    if (user._id.toString() !== res.locals.jwtData.id ) {
      return res.status(401).send("Permission didn't match")
    }

    return res.status(200).json({ messages: "OK", chats: user.chats })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "ERROR", cause:  error.message})
  }
}

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id)

    if (!user) {
      return res.status(401).send("User not registered or Token malfunctioned")
    }

    if (user._id.toString() !== res.locals.jwtData.id ) {
      return res.status(401).send("Permission didn't match")
    }

    //@ts-ignore
    user.chats = []
    user.save()

    return res.status(200).json({ messages: "OK" })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "ERROR", cause:  error.message})
  }
}
