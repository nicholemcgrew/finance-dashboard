// PWD : xIcFBIzkJ259Dnmd
import express, { Express } from 'express'
import mongoose from 'mongoose'
import financialRecordRouter from './routes/financial-records'
import cors from 'cors'

const app: Express = express()
const port = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const mongoURI: string = "mongodb+srv://nicholemcgrew:xIcFBIzkJ259Dnmd@financedashboard.iv9wkgh.mongodb.net/dashboard"

mongoose
.connect(mongoURI)
.then(() => console.log("Connected to DB"))
.catch((err) => console.error("Failed to connect to DB"))

app.use("/financial-records", financialRecordRouter)

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})