import { Variables } from "../../schema"
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

    updateIncome(amount: number){
        const genQuery = (value: number) => Variables.findByIdAndUpdate(VAR_DOC_ID, { $inc: {"stats.capital": value }}, {new: true})
        return {
            inc: async () => await genQuery(amount),
            dec: async () => await genQuery(-amount)
        }
    }
}