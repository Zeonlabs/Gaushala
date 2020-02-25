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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const repository_1 = require("../../repository");
const exceptions_common_1 = require("../../common/exceptions.common");
const initVariables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const input = lodash_1.default.pick(req.body, ['name', 'pin']);
        if (!input.pin)
            throw new exceptions_common_1.PinNotFoundException();
        const variablesRepo = new repository_1.VariablesRepository();
        const doc = yield variablesRepo.create(input);
        res.send(doc);
    }
    catch (e) {
        console.log(e);
        res.status(e.code || 400).send(e.message);
    }
});
exports.initVariables = initVariables;
//# sourceMappingURL=variables.controller.js.map