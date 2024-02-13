import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

// DOT ENV
dotenv.config()

// PORT
const port = process.env.API_PORT

// API
const app = express()
app.use(express.json())

// MONGO DB CONFIG
const mongoUser = process.env.MONGODB_USER
const mongoSecret = process.env.MONGODB_SECRET
const mongoConn = process.env.MONGODB_CONN.replace("<user>", mongoUser).replace("<password>", mongoSecret)

// DB MODEL
const Movie = mongoose.model("Movie", {
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
})

//// ROUTES FOR "/" ////
// GET
app.get("/", async (req, res) => {
    const movies = await Movie.find()
    res.send(movies)
})

// POST
app.post("/", async (req, res) => {
    const movie = new Movie({
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    })
    await movie.save()
    res.send(movie)
})

// DELETE
app.delete("/:id", async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id)
    res.send(movie)
})

// UPDATE
app.put("/:id", async (req, res) => {
    await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        image_url: req.body.image_url,
        trailer_url: req.body.trailer_url
    }, {new: true})
    res.send(movie)
})


app.listen(port, async () => {
    await mongoose.connect(mongoConn)
    .then(() => {
        console.log("Database connected.")
    })
    .catch((err) => console.error("Error connecting to the database. ", err))
    console.log(`Server listening on port ${port}`)
})