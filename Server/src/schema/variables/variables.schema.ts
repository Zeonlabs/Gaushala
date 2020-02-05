import mongoose from 'mongoose'
import {VariablesModel} from './variables.typedef'

const variablesSchema = new mongoose.Schema({
    _id: {
        type: Number,
        default: 115
    },
    name: String,
    pin: Number,
    stats: {
        capital: {
            type: Number,
            default: 0
        }
    }
})

export const Variables: mongoose.Model<VariablesModel> = mongoose.model<VariablesModel>('commonVars', variablesSchema)