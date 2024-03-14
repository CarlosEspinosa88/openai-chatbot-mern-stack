import express from "express";

const app = express();

// GET
app.get('/', function (req, res) {
    // console.log(req.body)
  return res.send('hello world')
})

// POST
// app.post('/send', function (req, res) {
//   console.log(req.body)
//   return res.send('send data')
// })

// PUT
// app.put('/edit', function (req, res) {
//   console.log(req.body)
//   return res.send('edit data')
// })

// DELETE
// app.use(express.json())

// app.delete('/user/:userId', function (req, res, next) {
//   console.log(req.params.userId)
//   return res.send('remove data')
// })

app.listen(8000, () => console.log('Open server: port 8000'))