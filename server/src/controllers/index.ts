import {initVariables} from './variables/variables.controller'
import {saveIncome} from './income/income.controller'
import {saveExpense} from './expense/expense.controller'

import {saveEmployee, getAvatar} from './employee/employee.controller'
import {addNote, updateNote, deleteNote} from './note/note.controller'
import {addTrustMember, deleteTrustMember, updateTrustMember} from './trustMember/trustMember.controller'

import {generateFilteredReport} from './common/common.controller'

export {
    initVariables,
    saveIncome,
    saveExpense,
    saveEmployee,
    getAvatar,
    addNote,
    updateNote,
    deleteNote,
    addTrustMember,
    deleteTrustMember,
    updateTrustMember,
    generateFilteredReport
}