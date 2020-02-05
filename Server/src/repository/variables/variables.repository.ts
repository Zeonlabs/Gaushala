import { Variables } from "../../schema"

export class VariablesRepository{
    async create(name: string, pin: number){
        const variables = new Variables({
            name, pin
        })

        const savedVars = await variables.save()

        return {
            name: savedVars.name,
            stats: savedVars.stats
        }
    }

    async updateIncome(value: number){
        return {
            inc: async () => {
                const updatedVal = await Variables.findByIdAndUpdate(115, {})
            }
        }
    }
}