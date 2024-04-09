import { Configuration } from "openai"
import { config } from "dotenv"

config({ path: './.env'})


export const configureOpenAI = async () => {
  const configOpenAI = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET,
    organization: process.env.OPEN_AI_ORGANIZATION_ID,
  })

  return configOpenAI
}
