import {Application, Router} from 'express'
import { saveIncome, initVariables, saveExpense, addTrustMember, deleteTrustMember, updateTrustMember, addNote, updateNote, deleteNote, generateFilteredReport, saveEmployee, getAvatar, deleteIncome, deleteExpense, editIncome, editExpense, saveAnimalIncome, deleteAnimalIncome, editAnimalIncome, saveDeadAnimal, deleteDeadAnimal, editDeadAnimal, saveGivenAnimal, deleteGivenAnimal, editGivenAnimal, saveAnimalCost, deleteAnimalCost, editAnimalCost } from './controllers'
import { paginationMiddleware } from './middlewares/pagination/pagination.middleware'
import { Income, Expense, TrustMember, Note, Employee, AnimalIncome, DeadAnimal, GivenAnimal, AnimalCost } from './schema'
import { deleteEmployee } from './controllers/employee/employee.controller'
import { auth } from './common/auth.common'

export class Routes{

    public routes(app: Application): void{
        const incomeRoute = Router(),
            expenseRoute = Router(),
            employeeRoute = Router(),
            noteRoute = Router(),
            trustMemberRoute = Router(),
            animalIncomeRoute = Router(),
            deadAnimalRoute = Router(),
            givenAnimalRoute = Router(),
            animalCostRouter = Router()

        app.post('/setup', initVariables)
        app.post('/auth', auth)
        
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

        animalIncomeRoute.post('/add', saveAnimalIncome)
        animalIncomeRoute.delete('/delete/:id', deleteAnimalIncome)
        animalIncomeRoute.patch('/edit/:id', editAnimalIncome)
        animalIncomeRoute.get('/', paginationMiddleware(AnimalIncome))

        deadAnimalRoute.post('/add', saveDeadAnimal)
        deadAnimalRoute.delete('/delete/:id', deleteDeadAnimal)
        deadAnimalRoute.patch('/edit/:id', editDeadAnimal)
        deadAnimalRoute.get('/', paginationMiddleware(DeadAnimal))

        givenAnimalRoute.post('/add', saveGivenAnimal)
        givenAnimalRoute.delete('/delete/:id', deleteGivenAnimal)
        givenAnimalRoute.patch('/edit/:id', editGivenAnimal)
        givenAnimalRoute.get('/', paginationMiddleware(GivenAnimal))

        animalCostRouter.post('/add', saveAnimalCost)
        animalCostRouter.delete('/delete/:id', deleteAnimalCost)
        animalCostRouter.patch('/edit/:id', editAnimalCost)
        animalCostRouter.get('/', paginationMiddleware(AnimalCost))

        app.use('/income', incomeRoute)
        app.use('/expense', expenseRoute)
        app.use('/employee', employeeRoute)
        app.use('/note', noteRoute)
        app.use('/trust-member', trustMemberRoute)
        app.use('/animal-income', animalIncomeRoute)
        app.use('/dead-animal', deadAnimalRoute)
        app.use('/given-animal', givenAnimalRoute)
        app.use('/animal-expense', animalCostRouter)
    }
}