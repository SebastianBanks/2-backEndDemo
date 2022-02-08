const express = require("express")
const cors = require("cors")
const app = express()
const port = 4004
const ctrl = require("./controller.js")

app.use(express.json())
app.use(cors())

app.get('/api/movies', ctrl.getAllMovies)
app.delete('/api/movies/:id', ctrl.deleteMovie)
app.post(`/api/movies`, ctrl.addMovie)
app.put('/api/movies/:id', ctrl.editMovie)

app.listen(port, () => console.log(`Let's go Team Avatar!!  🪨🔥💨🌊 - ${port}`))