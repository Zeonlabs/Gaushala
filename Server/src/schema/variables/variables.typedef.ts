import { Document } from "mongoose";

interface StatsModel{
    capital: number
}

export interface VariablesModel extends Document{
    name: string
    pin: number
    stats: StatsModel
}