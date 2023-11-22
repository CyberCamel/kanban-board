import express from 'express'
import { Op } from 'sequelize'
import { sequelize } from './db.js'
import Board from './models/board.js'
import Task from './models/task.js'
import cors from 'cors'
const app = express()

app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173', // Specify the allowed origin
    methods: 'GET,POST,DELETE', // Specify allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization' // Specify allowed headers
}

app.use(cors(corsOptions))

const pgLog = (msg) => {
    console.log('SEQUELIZE: ' + msg)
}

try {
    await sequelize.authenticate()
    pgLog('Connection has been established successfully.')
} catch (error) {
    pgLog('Unable to connect to the database:', error)
}

app.get('/api/ping', (req, res) => {
    console.log('accessing /ping')
    res.send('PONG!')
})

app.post('/api/Boards', async (req, res) => {
    console.log('POST to /Boards')
    if (!req.body.name) {
        console.log(req.body)
        res.status(400).send('No name supplied!')
        return
    }
    console.log('POST to Boards')
    const r = await Board.create({ name: req.body.name })
    res.send(`Board: ${r.name} created with id ${r.id}`)
})

app.delete('/api/Boards/:id', async (req, res) => {
    console.log('DELETE to /Boards')
    const entry = await Board.findOne({
        where: {
            id: {
                [Op.eq]: req.params.id
            }
        }
    })
    if (!entry) {
        res.status(404).send('Board not found')
        return
    }
    entry.destroy()
    res.send(`Deleted board ${entry.name}`)
})

app.get('/api/Boards', async (req, res) => {
    console.log('accessing /Boards')
    const boards = await Board.findAll()
    res.send(boards)
})

app.post('/api/Boards/:board/tasks', async (req, res) => {
    console.log(`POST to /Boards/${req.params.board}/tasks`)
    try {
        const result = await Task.create({
            title: 'task1',
            content: 'asdasd',
            BoardId: req.params.board
        })
    } catch (error) {
        if (error.name == 'SequelizeForeignKeyConstraintError') {
            res.status(404).send({
                success: false,
                error: `Board ${req.params.board} does not exist`
            })
        }

        return
    }

    res.send({ success: true, created: result.id })
})

app.get('/api/Boards/:board/tasks', async (req, res) => {
    console.log(`GET to /Boards/${req.params.board}/tasks`)

    const tasks = await Task.findAll({
        where: {
            BoardId: {
                [Op.eq]: req.params.board
            }
        }
    })

    res.send({ tasks: tasks })
})

export default app
