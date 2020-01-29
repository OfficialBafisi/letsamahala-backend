import { Request, Response, NextFunction, Router } from "express"
import * as ErrorHandler from "../utils/ErrorHandler"

const handle404Error = (router: Router) => {
	router.use((request: Request, response: Response)=> {
		ErrorHandler.notFoundError();
	});
}

const handleClientErrors = (router: Router) => {
	router.use((error: Error, request: Request, response: Response, next: NextFunction)=> {
		ErrorHandler.clientError(error,response, next)
	})
}

const handleServerErrors = (router: Router)=> {
	router.use((error: Error, request: Request, response: Response, next: NextFunction)=> {
		ErrorHandler.serverError(error,response, next)
	})
}

export default [handle404Error, handleClientErrors, handleServerErrors]