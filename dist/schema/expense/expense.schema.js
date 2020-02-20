"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const commonStringType = {
    type: String,
    required: true,
    trim: true
};
const ExpenseSchema = new mongoose_1.default.Schema({
    slip_no: Number,
    date: Date,
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
    pan_no: {
        type: String,
        trim: true
    },
    ref_name: {
        type: String,
        trim: true
    },
    note: {
        type: String,
        trim: true
    }
});
ExpenseSchema.plugin(mongoose_paginate_v2_1.default);
exports.Expense = mongoose_1.default.model('expense', ExpenseSchema);
//# sourceMappingURL=expense.schema.js.map