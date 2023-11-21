import  mongoose from "mongoose"

const Schema = mongoose.Schema

mongoose.connect()

const board = new Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    guid: {
        type: String
    },
    cards: [
        {
            title: {
                type: String
            },
            content: {
                type: String
            },
            status: {
                type: String
            }
        }
    ]
})
