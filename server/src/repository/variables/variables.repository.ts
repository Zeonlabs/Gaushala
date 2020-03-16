import { Variables, VariablesModel, AnimalIncomeModel, AnimalModel, AnimalIncome } from "../../schema"
import { VAR_DOC_ID } from "../../common/constants.common"
import { genOtp } from "../../common/utils.common"

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

    updateAnimals(animals: AnimalModel[]){
       
        const genQuery = (animals: AnimalModel[]) => {
            let query = {
                'stats.animal.small': 0,
                'stats.animal.big': 0
            }
            animals.forEach(animal => {
                query[`stats.animal.${animal.type}`] = animal.count
                if(animal.type  < 5){
                    query["stats.animal.small"] += animal.count
                }
                else if (animal.type < 9){
                    query["stats.animal.big"] += animal.count
                }
            })
            return Variables.findByIdAndUpdate(VAR_DOC_ID, { $inc: { ...query }}, {new: true})
        }

        return {
            inc: async () => await genQuery(animals),
            dec: async () => await genQuery(animals.map(ani => ({ type: ani.type, count: -ani.count})))
        }
    }

    async issueOtp(){
        const updatedVars = await Variables.findByIdAndUpdate(VAR_DOC_ID, { $set: { otp: genOtp() } })
        return updatedVars.otp
    }
}