import { sequelize } from '../db.js'

import Task from '../models/task.js'
import Board from '../models/board.js'

sequelize
    .sync({ force: false }) // Sync models with the database
    .then(() => {
        console.log('Database and tables synced!')
    })
    .catch((err) => {
        console.error('Error syncing database:', err)
    })
