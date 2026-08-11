import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"


dotenv.config()

const port = process.env.PORT

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "Agent is running" })
})

app.listen(port, () => {
  console.log(`Agent is running on port ${port}`)
  connectDb()
})

