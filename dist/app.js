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
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const initSetup_common_1 = require("./common/initSetup.common");
const app = express_1.default();
exports.app = app;
const routesPrv = new routes_1.Routes();
dotenv_1.config();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
routesPrv.routes(app);
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost:27017/gaushala', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield initSetup_common_1.initSetup();
    console.log('Connected to DB');
}))
    .catch(e => console.log('failed to connect DB', e));
//# sourceMappingURL=app.js.map