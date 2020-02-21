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
const saveIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const income = req.body;
        const incomeRepo = new repository_1.IncomeRepository();
        const variablesRepo = new repository_1.VariablesRepository();
        const savedIncome = yield incomeRepo.save(income);
        const updatedCapital = yield variablesRepo.updateIncome(savedIncome.money.amount).inc();
        res.send(savedIncome);
    }
    catch (e) {
        console.log(e);
        res.status(400).send();
    }
});
exports.saveIncome = saveIncome;
const getAllIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const incomeRepo = new repository_1.IncomeRepository();
        const allIncome = yield incomeRepo.getAll();
        res.send(allIncome);
    }
    catch (e) {
        console.log(e);
        res.status(400).send();
    }
});
exports.getAllIncome = getAllIncome;
//# sourceMappingURL=income.controller.js.map