import express from "express" //Work asyncronously

const app = express()

const port = process.env.PORT || 3000

const jokes = [
    {
        id: 1,
        joke: "first joke",
    },
    {
        id: 2,
        joke: "second joke",
    },
    {
        id: 3,
        joke: "third joke",
    },
    {
        id: 4,
        joke: "forth joke",
    },
    {
        id: 5,
        joke: "fifth joke",
    },
]

app.get('/', (req, res) => {
    res.send("this is a joke website")
})

app.get("/api/jokes", (req, res) => {
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`Server at http://localhost${port}`)
}) 