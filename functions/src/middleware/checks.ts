import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors"

export const checkSearchParams = (
	request: Request,
	response: Response,
	next: NextFunction
	) => {
		if (!request.query.name) {
			throw new HTTP400Error("Missing name parameter");
		}
		else {
			next();
		}
}