import {Application, Router} from 'express'
import { saveIncome, initVariables, saveExpense } from './controllers'
import { paginationMiddleware } from './middlewares/pagination/pagination.middleware'
import { Income, Expense } from './schema'

export class Routes{

    public routes(app: Application): void{
        const incomeRoute = Router()
        app.use('/income', incomeRoute)

        const expenseRoute = Router()
        app.use('/expense', expenseRoute)

        app.post('/setup', initVariables)
        
        incomeRoute.post('/add', saveIncome)
        incomeRoute.get('/', paginationMiddleware(Income))

        expenseRoute.post('/add', saveExpense)
        expenseRoute.get('/', paginationMiddleware(Expense))

    }
}