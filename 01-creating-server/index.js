require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const persionalInfo = {
    "Name": "Anuj Dwivedi",
    "Age": 27,
    "Add": "Kanpur"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res) => {
    res.send("Anuj Dwivedi");
})

app.get("/tags", (req, res) => {
    res.send("<h1>This is H1 tag</h1>")
})

app.get("/info", (req, res) => {
    res.json(persionalInfo)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})