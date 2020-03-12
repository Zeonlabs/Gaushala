import mongoose, { Model } from "mongoose";
import mongoosePaginte from 'mongoose-paginate-v2'
import { AnimalStmtModel } from "./animalStmt.typedef";

const AnimalStmtSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    income: Number,
    given: Number,
    dead: Number,
    samll: Number,
    big: Number,
    other: Number
})

AnimalStmtSchema.plugin(mongoosePaginte)

export const AnimalStmt: Model<AnimalStmtModel> = mongoose.model<AnimalStmtModel>('animal-stmt', AnimalStmtSchema)