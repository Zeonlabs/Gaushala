"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_v2_1 = __importDefault(require("mongoose-paginate-v2"));
const NoteSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        trim: true,
        maxlength: 10
    },
    description: {
        type: String,
        trim: true
    }
});
NoteSchema.plugin(mongoose_paginate_v2_1.default);
exports.Note = mongoose_1.default.model('note', NoteSchema);
//# sourceMappingURL=note.schema.js.map