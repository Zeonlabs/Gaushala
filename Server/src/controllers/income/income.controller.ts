import {Request, Response} from 'express'
import {IncomeRepository} from '../../repository'

const saveIncome = async (req: Request, res: Response) => {
    try{
        const income = req.body
        const incomeRepo = new IncomeRepository()
        const savedIncome = await incomeRepo.save(income)
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