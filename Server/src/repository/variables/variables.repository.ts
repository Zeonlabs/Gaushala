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

    updateIncome(value: number){
        const genQuery = (config: Object) => Variables.findByIdAndUpdate(VAR_DOC_ID, config, {new: true})

        return {
            inc: async () => {
                const updatedVal = await genQuery({
                    $inc: {
                        "stats.capital": value
                    }
                })
                return updatedVal
            }
        }
    }
}