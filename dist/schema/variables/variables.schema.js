"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const constants_common_1 = require("../../common/constants.common");
const variablesSchema = new mongoose_1.default.Schema({
    _id: {
        type: Number,
        default: constants_common_1.VAR_DOC_ID
    },
    name: String,
    pin: Number,
    stats: {
        capital: {
            type: Number,
            default: 0
        }
    }
});
exports.Variables = mongoose_1.default.model('variables', variablesSchema);
//# sourceMappingURL=variables.schema.js.map