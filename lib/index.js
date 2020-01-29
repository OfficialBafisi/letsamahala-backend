"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase = __importStar(require("firebase-functions"));
// import http from "http";
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
const services_1 = __importDefault(require("./services"));
// Stop instance when uncaught Exception occur
process.on("uncaughtException", error => {
    console.log(`UncaughtException: ${error}`);
    process.exit(1);
});
process.on("unhandledRejection", error => {
    console.log(`UnhandledRejection: ${error}`);
    process.exit(1);
});
//Router configurations
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(services_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
// Run server
const { PORT = 3000 } = process.env;
// const server = http.createServer(router);
// router.listen(
// 	PORT, ()=>{
// 		console.log(`Server is running at http://localhost:${PORT} ...`)
// 	});
router.listen(PORT, () => {
    console.log(`Listening at port: ${PORT}`);
});
exports.app = firebase.https.onRequest(router);
//# sourceMappingURL=index.js.map