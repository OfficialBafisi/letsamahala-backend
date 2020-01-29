"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpErrors_1 = require("../utils/httpErrors");
exports.notFoundError = () => {
    throw new httpErrors_1.HTTP404Error("Method not found.");
};
exports.clientError = (error, response, next) => {
    if (error instanceof httpErrors_1.HTTPClientError) {
        console.warn(error);
        response.status(error.statusCode).send(error.message);
    }
    else {
        next(error);
    }
};
exports.serverError = (error, response, next) => {
    console.error(error);
    if (process.env.NODE_ENV === "production") {
        response.status(500).send("Internal Server Error");
    }
    else {
        response.status(500).send(error.stack);
    }
};
//# sourceMappingURL=ErrorHandler.js.map