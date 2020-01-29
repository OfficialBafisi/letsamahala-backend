import { Response, NextFunction } from "express"
import { HTTPClientError, HTTP404Error } from "../utils/httpErrors";

export const notFoundError = () => {
	throw new HTTP404Error("Method not found.");
}

export const clientError = (error: Error, response: Response, next: NextFunction) => {
	if(error instanceof HTTPClientError) {
		console.warn(error);
		response.status(error.statusCode).send(error.message);
	}
	else {
		next(error);
	}
}

export const serverError = (error: Error, response: Response, next: NextFunction) => {
	console.error(error);
	if (process.env.NODE_ENV === "production") {
		response.status(500).send("Internal Server Error")
	}
	else {
		response.status(500).send(error.stack)
	}
}