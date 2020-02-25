import {Request, Response} from 'express'
import {ExpenseRepository, VariablesRepository} from '../../repository'

const saveExpense = async (req: Request, res: Response) => {
    try{
        const expense = req.body
        const expenseRepo = new ExpenseRepository()
        const variableRepo = new VariablesRepository()

        const savedExpense = await expenseRepo.save(expense)
        const updatedCapital = await variableRepo.updateIncome(savedExpense.money.amount).dec()

        res.json(savedExpense)
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: e.message})
    }
}

export {
    saveExpense
}