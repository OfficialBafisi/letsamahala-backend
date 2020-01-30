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
const callController_1 = require("./callController");
exports.default = [
    {
        path: "/api/v1/call",
        method: "get",
        handler: [
            ({ query }, response) => __awaiter(void 0, void 0, void 0, function* () {
                yield callController_1.callNumber_tw(query.toNumber, query.fromNumber);
                response.status(200).send('Call Placed');
                return;
            })
        ]
    }
];
//# sourceMappingURL=routes.js.map