const connectToMongo = require("./db") 
const dotenv = require("dotenv")
const express = require('express')
const cors = require('cors')
//data base connected
connectToMongo()

const app = express()

dotenv.config({path:"./config.env"})
app.use(express.json())
app.use(cors())

//Available Routes
app.use("/api/auth" , require("./routes/auth"))
app.use("/api/courses" , require("./routes/courses"))

const port = process.env.PORT || 5000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
