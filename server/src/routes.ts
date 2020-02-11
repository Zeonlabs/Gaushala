import {Application, Router} from 'express'
import { saveIncome, initVariables, saveExpense, addTrustMember, deleteTrustMember, updateTrustMember, addNote, updateNote, deleteNote, generateFilteredReport } from './controllers'
import { paginationMiddleware } from './middlewares/pagination/pagination.middleware'
import { Income, Expense, TrustMember, Note } from './schema'

export class Routes{

    public routes(app: Application): void{
        const incomeRoute = Router(),
            expenseRoute = Router(),
            noteRoute = Router(),
            trustMemberRoute = Router()

        app.post('/setup', initVariables)
        
        incomeRoute.post('/add', saveIncome)
        incomeRoute.get('/', paginationMiddleware(Income))
        incomeRoute.get('/filter', generateFilteredReport(Income))

        expenseRoute.post('/add', saveExpense)
        expenseRoute.get('/', paginationMiddleware(Expense))
        expenseRoute.get('/filter', generateFilteredReport(Expense))

        noteRoute.post('/add', addNote)
        noteRoute.get('/', paginationMiddleware(Note))
        noteRoute.patch('/update/:id', updateNote)
        noteRoute.delete('/delete/:id', deleteNote)

        trustMemberRoute.post('/add', addTrustMember)
        trustMemberRoute.get('/', paginationMiddleware(TrustMember))
        trustMemberRoute.patch('/update/:id', updateTrustMember)
        trustMemberRoute.delete('/delete/:id', deleteTrustMember)


        app.use('/income', incomeRoute)
        app.use('/expense', expenseRoute)
        app.use('/note', noteRoute)
        app.use('/trust-member', trustMemberRoute)
    }
}