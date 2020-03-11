import {initVariables} from './variables/variables.controller'
import {saveIncome, deleteIncome, editIncome} from './income/income.controller'
import {saveExpense, deleteExpense, editExpense} from './expense/expense.controller'
import {saveEmployee, getAvatar} from './employee/employee.controller'
import {addNote, updateNote, deleteNote} from './note/note.controller'
import {addTrustMember, deleteTrustMember, updateTrustMember} from './trustMember/trustMember.controller'

import {generateFilteredReport} from './common/common.controller'
import {saveAnimalIncome, deleteAnimalIncome, editAnimalIncome} from './animalIncome/animalIncome.controller'
import {saveDeadAnimal, deleteDeadAnimal, editDeadAnimal} from './deadAnimal/deadAnimal.controller'
import {saveGivenAnimal, deleteGivenAnimal, editGivenAnimal} from './givenAnimal/givenAnimal.controller'
import { saveAnimalCost, deleteAnimalCost, editAnimalCost } from './animalCost/animalCost.controller'

export {
    initVariables,
    saveIncome,
    editIncome,
    deleteIncome,
    saveExpense,
    editExpense,
    deleteExpense,
    saveEmployee,
    getAvatar,
    addNote,
    updateNote,
    deleteNote,
    addTrustMember,
    deleteTrustMember,
    updateTrustMember,
    generateFilteredReport,
    saveAnimalIncome,
    deleteAnimalIncome,
    editAnimalIncome,
    saveDeadAnimal,
    deleteDeadAnimal,
    editDeadAnimal,
    saveGivenAnimal,
    deleteGivenAnimal,
    editGivenAnimal,
    saveAnimalCost,
    deleteAnimalCost,
    editAnimalCost
}