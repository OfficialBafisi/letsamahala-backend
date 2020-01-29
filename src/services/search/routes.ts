import { Request, Response } from "express"
import { getPlacesByName } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks"

export default [
{
	path: "/",
	method: "get",
	handler: async(request: Request, response: Response) => {
		response.send("Server up and running!");
	}
},
{
	path: "/api/v1/search",
	method: "get",
	handler: [
		//check if all required params are available
		checkSearchParams,
		async({query}: Request, response: Response)=>{
			const result = await getPlacesByName(query.name);
			response.status(200).send(result);
		}]
},
{
	path: "/ping",
	method: "get",
	handler: [
		async({query}: Request, response: Response)=>{
			response.send("Everything runnig smooth!!")
		}]
}]