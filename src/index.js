const express = require("express")
const v1WorkoutRouter = require("./V1/routes/workoutRoutes");
const path = require("path")
const  swaggerUI = require("swagger-ui-express")
const  swaggerJsDoc = require("swagger-jsdoc")

const helpers={
    swaggerSpec:{
        swaggerDefinition:{
        openapi:"3.0.0",
        info:{
          title: "Atenea API Documentation",
          version:"1.0.0",
        },
        servers:[
          {
            url: `http://localhost:4000`
          }
        ],
      },
      apis:[`${path.join(__dirname,"../src/V1/routes/*.js")}`]
      },

}
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use("/api-doc",swaggerUI.serve,swaggerUI.setup(swaggerJsDoc(helpers.swaggerSpec)))
app.use("/api/v1/workouts",v1WorkoutRouter)
app.get('/', function (req, res) {
    res.send('Hello World')
    })

app.listen(PORT,()=>{console.log(`Servidor en el puerto ${PORT}`)})