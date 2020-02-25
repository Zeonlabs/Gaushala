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
const schema_1 = require("../../schema");
const constants_common_1 = require("../../common/constants.common");
class VariablesRepository {
    create(doc) {
        return __awaiter(this, void 0, void 0, function* () {
            const variables = new schema_1.Variables(doc);
            const savedVars = yield variables.save();
            return {
                name: savedVars.name,
                stats: savedVars.stats
            };
        });
    }
    updateIncome(amount) {
        const genQuery = (value) => schema_1.Variables.findByIdAndUpdate(constants_common_1.VAR_DOC_ID, { $inc: { "stats.capital": value } }, { new: true });
        return {
            inc: () => __awaiter(this, void 0, void 0, function* () { return yield genQuery(amount); }),
            dec: () => __awaiter(this, void 0, void 0, function* () { return yield genQuery(-amount); })
        };
    }
}
exports.VariablesRepository = VariablesRepository;
//# sourceMappingURL=variables.repository.js.map