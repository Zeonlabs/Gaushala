import mongoose, {Model} from 'mongoose';
import {IncomeModel} from './income.typedef'

const commonStringType = {
    type: String,
    required: true,
    trim: true
}

const IncomeSchema = new mongoose.Schema({
    type: commonStringType,
    name: commonStringType,
    address: commonStringType,
    phone: {
        type: Number,
        required: true
    },
    money: {
        type: {
            type: String,
            enum: ['cash', 'cheque'],
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        cheque_no: Number
    },
    item: [
        {
            type: {
                type: String,
                trim: true
            },
            amount: Number
        }
    ],
    ref_name: {
        type: String,
        trim: true
    },
    note: {
        type: String,
        trim: true
    },
    date: Date
})

export const Income: Model<IncomeModel> = mongoose.model<IncomeModel>('income', IncomeSchema)
