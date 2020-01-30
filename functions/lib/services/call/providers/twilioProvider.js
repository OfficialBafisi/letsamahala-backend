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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const twilio_1 = __importDefault(require("twilio"));
dotenv_1.default.config();
const client = twilio_1.default(process.env.ACCOUNTSID, process.env.AUTHTOKEN);
exports.callNumber = (toNumber, fromNumber) => __awaiter(void 0, void 0, void 0, function* () {
    client.calls.create({
        url: 'http://demo.twilio.com/docs/voice.xml',
        to: toNumber,
        from: fromNumber
    }).then(call => console.log(call.sid));
});
//# sourceMappingURL=twilioProvider.js.map