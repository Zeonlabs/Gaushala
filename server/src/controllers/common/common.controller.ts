import {Request, Response} from 'express'
import {Model as MongoModel} from 'mongoose'
import { IncomeModel, ExpenseModel, AnimalIncome, GivenAnimal, DeadAnimal } from '../../schema'
import { VariablesRepository, AnimalIncomeRepository, DeadAnimalRepository, GivenAnimalRepository } from '../../repository'

export const generateFilteredReport = (Model: MongoModel<IncomeModel | ExpenseModel>) => async (req: Request, res: Response) => {
    try{
        const { dateFrom = null, dateTo = null, type = null, moneyType = null, chequeNo = null, amountFrom = null, amountTo = null} = req.query

        const genFilter = () => {
            const query = {}
            if(dateFrom) query['date'] = {
                $gte: new Date(dateFrom), $lt: new Date(dateTo)
            }
            if(type) query['type'] = type
            if(moneyType) query['money.type'] = moneyType
            if(chequeNo) query['money.cheque_no'] = chequeNo
            if(amountFrom && amountTo) query['money.amount'] = {
                $gte: amountFrom, $lt: amountTo
            }
            return query
        }

        const records = await Model.find(genFilter()).sort({_id: -1})
        res.json(records)
    }
    catch(e){
        console.log(e)
        res.status(400).send({message: e.message})
    }
}

// export const generateAanimalReport = async (req: Request, res: Response) => {
//     try{
//         const {page = 0, limit = 10} = req.query
//         const variablesRepo = new VariablesRepository()

//         const paginationConfig = {
//             page,
//             limit,
//             sort: {
//                 _id: -1
//             }
//         }
//         const animalIncome = await AnimalIncome.paginate({}, paginationConfig)
//         const deadAnimal = await DeadAnimal.paginate({}, paginationConfig)
//         const givenAnimal = await GivenAnimal.paginate({}, paginationConfig)

//         res.json({ animalIncome, deadAnimal, givenAnimal })
//     }
//     catch(e){
//         console.log(e);
//         res.status(400).send({message: e.message})
//     }
// }