import app from "./app.js"
import { config } from "dotenv"
import { connectToDataBase } from "./db/connection.js"

config({ path: './.env'})
const PORT = process.env.PORT || 8080

connectToDataBase().then(() => {
  
  // connections and listeners
  app.listen(PORT, () => 
    console.log('Server open and connected to database 🤓')
  )

}).catch((error) => console.log(error))
