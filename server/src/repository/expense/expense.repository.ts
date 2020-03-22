import {Expense, ExpenseModel} from '../../schema'

export class ExpenseRepository{
    async save(data: ExpenseModel){
        const expense = new Expense(data)
        return await expense.save()
    }

    async getAmount(expenseId: string){
        const doc = await Expense.findById(expenseId, {_id: 0, money: 1})
        return doc.money.amount
    }

    async update(id: string, data: ExpenseModel){
        const oldAmount = await this.getAmount(id)
        const doc = await Expense.findByIdAndUpdate(id, { $set: data }, { new: true })
        return { updatedExpense: doc, oldAmount }
    }

    async delete(id: string){
        const doc = await Expense.findByIdAndDelete(id)
        return doc
    }

    async getForAnalytics(dateFrom: Date, dateTo: Date){
        const records = await Expense.find({
            date: {
                $gte: dateFrom, $lt: dateTo
            }
        }, {_id: 0, date: 1, money: 2, type: 3})
        return records
    }
}