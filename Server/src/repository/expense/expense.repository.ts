import {Expense, ExpenseModel} from '../../schema'

export class ExpenseRepository{
    async save(data: ExpenseModel){
        const expense = new Expense(data)
        return await expense.save()
    }
}