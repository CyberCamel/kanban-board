import { sequelize } from '../db.js'

import { DataTypes } from 'sequelize'
import Board from './board.js'

const Task = sequelize.define('Task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: 'To-Do'
    }
})

Task.belongsTo(Board)
export default Task
