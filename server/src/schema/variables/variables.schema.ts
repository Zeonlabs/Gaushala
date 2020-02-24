import mongoose from 'mongoose'
import {VariablesModel} from './variables.typedef'
import { VAR_DOC_ID } from '../../common/constants.common'

const variablesSchema = new mongoose.Schema({
    _id: {
        type: Number,
        default: VAR_DOC_ID
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

export const Variables: mongoose.Model<VariablesModel> = mongoose.model<VariablesModel>('variables', variablesSchema)