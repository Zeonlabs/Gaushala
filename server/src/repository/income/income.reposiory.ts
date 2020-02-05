import {Income, IncomeModel} from '../../schema'

export class IncomeRepository{
    async save(data: IncomeModel){
        const income = new Income(data)
        const res = await income.save()
        return res
    }

    async getAll(){
        const allIncome = await Income.find()
        return allIncome
    }
}