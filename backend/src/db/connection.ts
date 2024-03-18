import { connect, disconnect } from "mongoose"
import { config } from "dotenv"

config({ path: './.env'})

async function connectToDataBase() {
  try {
    await connect(process.env.MONGODB_URL); 
  } catch (error) {
    console.log(error)
    throw new Error("Cannot connect to mongo DB")
  }
}

async function disconnectFronDataBase() {
  try {
    await disconnect()
  } catch (error) {
    console.log(error)
    throw new Error("Cannot disconnect to mongo DB") 
  }
}

export {
  connectToDataBase,
  disconnectFronDataBase
}