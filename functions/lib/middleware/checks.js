"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.checkSearchParams = (request, response, next) => {
    if (!request.query.name) {
        throw new httpErrors_1.HTTP400Error("Missing name parameter");
    }
    else {
        next();
    }
};
//# sourceMappingURL=checks.js.map