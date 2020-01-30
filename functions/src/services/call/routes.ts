import { Request, Response } from "express"
import { callNumber_tw } from "./callController";

export default [
{
	path: "/api/v1/call",
	method: "get",
	handler: [
		async({query}: Request, response: Response)=>{
			const result = await callNumber_tw(query.toNumber, query.fromNumber);
			response.status(200).send('Call Placed');
		}]
}]