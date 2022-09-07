const express = require("express")
const v1WorkoutRouter = require("./V1/routes/workoutRoutes");

const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use("/api/v1/workouts",v1WorkoutRouter)
app.get('/', function (req, res) {
    res.send('Hello World')
    })

app.listen(PORT,()=>{console.log(`Servidor en el puerto ${PORT}`)})