"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler = __importStar(require("../utils/ErrorHandler"));
const handle404Error = (router) => {
    router.use((request, response) => {
        ErrorHandler.notFoundError();
    });
};
const handleClientErrors = (router) => {
    router.use((error, request, response, next) => {
        ErrorHandler.clientError(error, response, next);
    });
};
const handleServerErrors = (router) => {
    router.use((error, request, response, next) => {
        ErrorHandler.serverError(error, response, next);
    });
};
exports.default = [handle404Error, handleClientErrors, handleServerErrors];
//# sourceMappingURL=errorHandlers.js.map