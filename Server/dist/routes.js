"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("./controllers");
class Routes {
    routes(app) {
        app.get('/', (req, res) => res.send('app is running'));
        app.route('/income')
            .post(controllers_1.saveIncome);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map