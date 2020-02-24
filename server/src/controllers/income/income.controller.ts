import {Request, Response} from 'express'
import {IncomeRepository, VariablesRepository} from '../../repository'

const saveIncome = async (req: Request, res: Response) => {
    try{
        const income = req.body
        const incomeRepo = new IncomeRepository()
        const variablesRepo = new VariablesRepository()

        const savedIncome = await incomeRepo.save(income)
        const updatedCapital = await variablesRepo.updateIncome(savedIncome.money.amount).inc()
        
        res.send(savedIncome)
    }
    catch(e){
        console.log(e)
        res.status(400).send()
    }
}

const getAllIncome = async (req: Request, res: Response) => {
    try{
        const incomeRepo = new IncomeRepository()
        const allIncome = await incomeRepo.getAll()
        res.send(allIncome)
    }
    catch(e){
        console.log(e)
        res.status(400).send()
    }
}

export {
    saveIncome,
    getAllIncome
}