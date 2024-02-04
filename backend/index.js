import express from 'express'
// import mongoose from 'mongoose'
import cors from 'cors'
import { config } from 'dotenv'
config()

import T66Y from './db.js'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001
connectToDB()
  .then(() => {
    app.listen(PORT, () => { console.log('Listening on ', PORT) })
  })

app.get('/getThreads', (req, res) => {
  T66Y.find().sort({ date: -1 })
    .then(t66y => res.json(t66y))
    .catch(err => res.json(err))
})

// const PORT = 3001
// app.listen(PORT, () => {
//   console.log(`Server is listening at $(3001)`)
// })


import { connect, disconnect } from "mongoose";
async function connectToDB() {
  try {
    const options = {
      dbName: 'mgdb',
    }
    await connect(process.env.MONGO, options)
    console.log("Connected to database")
  } catch (error) {
    console.log(error)
    await disconnect()
    throw new Error("Error connecting to database")
  }
}