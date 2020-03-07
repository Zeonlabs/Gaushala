import {Income, IncomeModel} from '../../schema'

export class IncomeRepository{
    async save(data: IncomeModel){
        const income = new Income(data)
        const res = await income.save()
        return res
    }

    async getAmount(incomeId: string){
        const doc = await Income.findById(incomeId, {_id: 0, money: 1})
        return doc.money.amount
    }

    async update(id: string, data: IncomeModel){
        const oldAmount = await this.getAmount(id)
        const doc = await Income.findByIdAndUpdate(id, {
            $set: data

        }, {new: true})
        return { updatedIncome: doc, oldAmount }
    }
    async delete(id: string){
        const doc = await Income.findByIdAndDelete(id)
        return doc
    }

    async getAll(){
        const allIncome = await Income.find()
        return allIncome
    }
}