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
exports.addTrustMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const TrustMemberRepo = new repository_1.TrustMemberRepository();
        const savedDoc = yield TrustMemberRepo.save(req.body);
        res.json(savedDoc);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
exports.updateTrustMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const TrustMemberRepo = new repository_1.TrustMemberRepository();
        const updatedDoc = yield TrustMemberRepo.update(id, req.body);
        res.json(updatedDoc);
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
exports.deleteTrustMember = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const TrustMemberRepo = new repository_1.TrustMemberRepository();
        const deletedDoc = yield TrustMemberRepo.delete(id);
        res.json({ _id: deletedDoc._id });
    }
    catch (e) {
        console.log(e);
        res.status(400).send({ message: e.message });
    }
});
//# sourceMappingURL=trustMember.controller.js.map