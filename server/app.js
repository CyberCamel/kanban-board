import express from 'express'
import Schema, { mongoose } from 'mongoose'
const app = express()



mongoose.

app.get('/ping', (req, res) => {
    res.send('PONG!!!!!')
})

export default app
