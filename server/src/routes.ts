import {Application, Router} from 'express'
import { saveIncome, initVariables, saveExpense, addTrustMember, deleteTrustMember, updateTrustMember, addNote, updateNote, deleteNote, generateFilteredReport, saveEmployee, getAvatar, deleteIncome, deleteExpense, editIncome, editExpense } from './controllers'
import { paginationMiddleware } from './middlewares/pagination/pagination.middleware'
import { Income, Expense, TrustMember, Note, Employee } from './schema'
import { deleteEmployee } from './controllers/employee/employee.controller'

export class Routes{

    public routes(app: Application): void{
        const incomeRoute = Router(),
            expenseRoute = Router(),
            employeeRoute = Router(),
            noteRoute = Router(),
            trustMemberRoute = Router()

        app.post('/setup', initVariables)
        
        incomeRoute.post('/add', saveIncome)
        incomeRoute.patch('/edit/:id', editIncome)
        incomeRoute.delete('/delete/:id', deleteIncome)
        incomeRoute.get('/', paginationMiddleware(Income))
        incomeRoute.get('/filter', generateFilteredReport(Income))

        expenseRoute.post('/add', saveExpense)
        expenseRoute.patch('/edit/:id', editExpense)
        expenseRoute.delete('/delete/:id', deleteExpense)
        expenseRoute.get('/', paginationMiddleware(Expense))
        expenseRoute.get('/filter', generateFilteredReport(Expense))

        employeeRoute.post('/add', saveEmployee)
        employeeRoute.get('/', paginationMiddleware(Employee))
        employeeRoute.get('/avatar/:id', getAvatar)
        employeeRoute.delete('/delete/:id', deleteEmployee)

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
        app.use('/employee', employeeRoute)
        app.use('/note', noteRoute)
        app.use('/trust-member', trustMemberRoute)
    }
}