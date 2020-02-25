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
const exceptions_common_1 = require("../../common/exceptions.common");
class TrustMemberRepository {
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const trustMember = new schema_1.TrustMember(data);
            const doc = trustMember.save();
            return doc;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deteledDoc = yield schema_1.TrustMember.findByIdAndDelete(id);
            if (!deteledDoc)
                throw new exceptions_common_1.NoRecordWithIDException();
            return deteledDoc;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedDoc = yield schema_1.TrustMember.findByIdAndUpdate(id, {
                $set: data
            }, { new: true });
            if (!updatedDoc)
                throw new exceptions_common_1.NoRecordWithIDException();
            return updatedDoc;
        });
    }
}
exports.TrustMemberRepository = TrustMemberRepository;
//# sourceMappingURL=trustMember.repository.js.map