"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const TrustMemberSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    position: {
        type: String,
        trim: true,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});
TrustMemberSchema.plugin(mongoose_paginate_v2_1.default);
exports.TrustMember = mongoose_1.default.model('TrustMember', TrustMemberSchema);
//# sourceMappingURL=trustMember.schema.js.map