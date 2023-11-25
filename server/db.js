import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
    'postgres://postgres:Bingbongpow8991@localhost:5432/kanban-board'
)
