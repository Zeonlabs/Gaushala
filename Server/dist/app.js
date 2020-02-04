"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const routes_1 = require("./routes");
const app = express_1.default();
exports.app = app;
const routesPrv = new routes_1.Routes();
dotenv_1.config();
app.use(body_parser_1.default.json());
routesPrv.routes(app);
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect('mongodb://localhost:27017/gaushala', { useNewUrlParser: true })
    .then(() => console.log('Connected to DB'))
    .catch(e => console.log('failed to connect DB', e));
//# sourceMappingURL=app.js.map