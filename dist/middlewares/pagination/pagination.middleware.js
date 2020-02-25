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
const paginationMiddleware = (Model) => (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 0, limit = 10 } = req.query;
        const rows = yield Model.paginate({}, {
            page,
            limit,
            sort: {
                _id: -1
            }
        });
        // req['rows'] = rows
        res.json(rows);
    }
    catch (e) {
        console.log(e);
        res.status(500).send({ message: e.message });
    }
});
exports.paginationMiddleware = paginationMiddleware;
//# sourceMappingURL=pagination.middleware.js.map