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
exports.addNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteRepo = new repository_1.NoteRepository();
        const savedNote = yield noteRepo.save(req.body);
        res.json(savedNote);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
exports.updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const noteRepo = new repository_1.NoteRepository();
        const updatedNote = yield noteRepo.update(id, req.body);
        res.json(updatedNote);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
exports.deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const noteRepo = new repository_1.NoteRepository();
        const deletedDoc = yield noteRepo.delete(id);
        res.json(deletedDoc);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
//# sourceMappingURL=note.controller.js.map