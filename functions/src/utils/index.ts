import { Router, Request, Response, NextFunction } from "express";

type Wrapper = ((router: Router) => void);

//Apply middlewares to router
export const applyMiddleware = (
	middleware: Wrapper[],
	router: Router) => {

	for (const f of middleware) {
		f(router);
	}
}

//
type Handler = (
	request: Request,
	response: Response,
	next: NextFunction) => Promise<void> | void

type Route = {
	path: string;
	method: string;
	handler: Handler | Handler[];
}

export const applyRoutes = (routes: Route[], router: Router) => {
	for (const route of routes) {
		const { method, path, handler } = route;
		(router as any)[method](path, handler)
	}
}