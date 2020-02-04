"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const commonStringType = {
    type: String,
    required: true,
    trim: true
};
const IncomeSchema = new mongoose_1.default.Schema({
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
});
exports.Income = mongoose_1.default.model('income', IncomeSchema);
//# sourceMappingURL=income.schema.js.map