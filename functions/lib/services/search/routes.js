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
const SearchController_1 = require("./SearchController");
const checks_1 = require("../../middleware/checks");
exports.default = [
    {
        path: "/",
        method: "get",
        handler: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
            response.send("Server up and running!");
        })
    },
    {
        path: "/api/v1/search",
        method: "get",
        handler: [
            //check if all required params are available
            checks_1.checkSearchParams,
            ({ query }, response) => __awaiter(void 0, void 0, void 0, function* () {
                const result = yield SearchController_1.getPlacesByName(query.name);
                response.status(200).send(result);
            })
        ]
    },
    {
        path: "/ping",
        method: "get",
        handler: [
            ({ query }, response) => __awaiter(void 0, void 0, void 0, function* () {
                response.send("Everything runnig smooth!!");
            })
        ]
    }
];
//# sourceMappingURL=routes.js.map