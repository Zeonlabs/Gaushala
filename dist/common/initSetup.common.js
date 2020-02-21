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
const schema_1 = require("../schema");
exports.initSetup = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if ((yield schema_1.Variables.countDocuments().exec()) > 0)
            return;
        const initialVars = new schema_1.Variables();
        yield initialVars.save();
    }
    catch (e) {
        console.log('initial setup failed');
    }
});
//# sourceMappingURL=initSetup.common.js.map