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
        const savedIncome = yield incomeRepo.save(income);
        res.send(savedIncome);
    }
    catch (e) {
        console.log(e);
        res.status(400);
    }
});
exports.saveIncome = saveIncome;
//# sourceMappingURL=income.controller.js.map