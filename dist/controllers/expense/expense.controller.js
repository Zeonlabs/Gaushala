"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("../../repository");
const saveExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expense = req.body;
        const expenseRepo = new repository_1.ExpenseRepository();
        const variableRepo = new repository_1.VariablesRepository();
        const savedExpense = yield expenseRepo.save(expense);
        const updatedCapital = yield variableRepo.updateIncome(savedExpense.money.amount).dec();
        res.json(savedExpense);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
exports.saveExpense = saveExpense;
//# sourceMappingURL=expense.controller.js.map