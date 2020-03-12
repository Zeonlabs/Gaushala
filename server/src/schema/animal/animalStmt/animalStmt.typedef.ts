import { Document, Types } from "mongoose";

export interface AnimalStmtModel extends Document{
    _id: Types.ObjectId
    date: Date
    income: number
    given: number
    dead: number
    samll: number
    big: number
    other: number
} 