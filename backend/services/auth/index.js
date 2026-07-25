import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js"
dotenv.config()

const port = process.env.PORT

const app = express()

app.get("/", (req, res) => {
  res.json({ message: "Auth is running" })
})

app.listen(port, () => {
  console.log(`Auth is running on port ${port}`)
  connectDb()
})

