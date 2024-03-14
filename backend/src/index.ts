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


// GET
// app.get('/', function (req, res) {
//   return res.send('hello world')
// })

// POST
// app.post('/send', function (req, res) {
//   console.log(req.body.name)
//   return res.send('send data')
// })

// PUT
// app.put('/edit', function (req, res) {
//   console.log(req.body.name)
//   return res.send('edit data')
// })

// DELETE
// app.delete('/user/:userId', function (req, res, next) {
//   console.log(req.params.userId)
//   return res.send('remove data')
// })

