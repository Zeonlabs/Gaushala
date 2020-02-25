"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variables_controller_1 = require("./variables/variables.controller");
exports.initVariables = variables_controller_1.initVariables;
const income_controller_1 = require("./income/income.controller");
exports.saveIncome = income_controller_1.saveIncome;
const expense_controller_1 = require("./expense/expense.controller");
exports.saveExpense = expense_controller_1.saveExpense;
const note_controller_1 = require("./note/note.controller");
exports.addNote = note_controller_1.addNote;
exports.updateNote = note_controller_1.updateNote;
exports.deleteNote = note_controller_1.deleteNote;
const trustMember_controller_1 = require("./trustMember/trustMember.controller");
exports.addTrustMember = trustMember_controller_1.addTrustMember;
exports.deleteTrustMember = trustMember_controller_1.deleteTrustMember;
exports.updateTrustMember = trustMember_controller_1.updateTrustMember;
//# sourceMappingURL=index.js.map