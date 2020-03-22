import {Request, Response} from 'express'
import {Model as MongoModel} from 'mongoose'
import { IncomeModel, ExpenseModel, EmployeeModel, TrustMemberModel, AnimalIncomeModel, DeadAnimalModel, AnimalCostModel, GivenAnimalModel, AnimalStmtModel, GivenAnimal } from '../../schema'
import { IncomeRepository, ExpenseRepository } from '../../repository'

export const generateFilteredReport = (Model: MongoModel<IncomeModel | ExpenseModel | EmployeeModel | TrustMemberModel | AnimalIncomeModel | DeadAnimalModel | AnimalCostModel | GivenAnimalModel | AnimalStmtModel >) => async (req: Request, res: Response) => {
    try{
        const { dateFrom = null, dateTo = null, type = null, moneyType = null, chequeNo = null, amountFrom = null, amountTo = null, position = null, tag = null} = req.query

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
            if(position) query['position'] = position
            if(tag) query['tag'] = tag
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

export const getIncomeExpenseAnalytics = async (req: Request, res: Response) => {
    try{
        const crrntDate = new Date()
        const prvDate = new Date()
        prvDate.setMonth(prvDate.getMonth() - 11)
        prvDate.setDate(1)
        prvDate.setTime(0)
        
        const incomeRepo = new IncomeRepository()
        const expenseRepo = new ExpenseRepository()

        const [incomes, expenses] = await Promise.all([
            await incomeRepo.getForAnalytics(prvDate, crrntDate),
            await expenseRepo.getForAnalytics(prvDate, crrntDate)
        ])

        const genMonthlyData = (arr: IncomeModel[] | ExpenseModel[]) => {
            let monthlyData = []
            arr.forEach(record => {
                const year = record.date.getUTCFullYear()
                const month = record.date.getMonth() + 1
                const index = monthlyData.findIndex(data => data.month === month)

                if(index > -1){
                    monthlyData[index].amount += record.money.amount
                }
                else{
                    monthlyData.push({
                        month,
                        year,
                        amount: record.money.amount
                    })
                }
            })
            return monthlyData
        }

        res.json({
            income: genMonthlyData(incomes),
            expense: genMonthlyData(expenses)
        })
    }
    catch(e){
        res.status(e.code || 400).send({message: e.message})
    }
}