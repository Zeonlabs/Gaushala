import { Variables, VariablesModel } from "../../schema"
import { VAR_DOC_ID } from "../../common/constants.common"

export class VariablesRepository{
    async create(doc: {name: string, pin: number}){
        const variables = new Variables(doc)
        const savedVars = await variables.save()

        return {
            name: savedVars.name,
            stats: savedVars.stats
        }
    }

    async update(data: {name: string, pin: number}){
        const doc = await Variables.findByIdAndUpdate(VAR_DOC_ID, { $set: data }, {new: true})
        return doc
    }

    updateCapital(amount: number){
        const genQuery = (value: number) => Variables.findByIdAndUpdate(VAR_DOC_ID, { $inc: {"stats.capital": value }}, {new: true})
        return {
            inc: async () => await genQuery(amount),
            dec: async () => await genQuery(-amount)
        }
    }

    async get(){
        const vars = await Variables.findById(VAR_DOC_ID)
        return vars
    }
}