import OpenAI from "openai"
import { config } from "dotenv"

config({ path: './.env'})


export const configureOpenAI = async () => {
  const configOpenAI = new OpenAI({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPEN_AI_ORGANIZATION_ID,
  })

  return configOpenAI
}
