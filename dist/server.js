"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
(() => {
    const PORT = process.env.PORT || 8081;
    app_1.app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));
})();
//# sourceMappingURL=server.js.map