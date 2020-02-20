"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const pagination_middleware_1 = require("./middlewares/pagination/pagination.middleware");
const schema_1 = require("./schema");
class Routes {
    routes(app) {
        const incomeRoute = express_1.Router(), expenseRoute = express_1.Router(), noteRoute = express_1.Router(), trustMemberRoute = express_1.Router();
        app.post('/setup', controllers_1.initVariables);
        incomeRoute.post('/add', controllers_1.saveIncome);
        incomeRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Income));
        expenseRoute.post('/add', controllers_1.saveExpense);
        expenseRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Expense));
        noteRoute.post('/add', controllers_1.addNote);
        noteRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.Note));
        noteRoute.patch('/update/:id', controllers_1.updateNote);
        noteRoute.delete('/delete/:id', controllers_1.deleteNote);
        trustMemberRoute.post('/add', controllers_1.addTrustMember);
        trustMemberRoute.get('/', pagination_middleware_1.paginationMiddleware(schema_1.TrustMember));
        trustMemberRoute.patch('/update/:id', controllers_1.updateTrustMember);
        trustMemberRoute.delete('/delete/:id', controllers_1.deleteTrustMember);
        app.use('/income', incomeRoute);
        app.use('/expense', expenseRoute);
        app.use('/note', noteRoute);
        app.use('/trust-member', trustMemberRoute);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map