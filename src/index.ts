import * as firebase from "firebase-functions"
// import http from "http";
import express from "express";
import { applyMiddleware, applyRoutes } from "./utils"
import middleware from "./middleware"
import errorHandlers from "./middleware/errorHandlers"
import routes from "./services"

// Stop instance when uncaught Exception occur
process.on("uncaughtException", error => {
	console.log(`UncaughtException: ${error}`);
	process.exit(1)
})

process.on("unhandledRejection", error => {
	console.log(`UnhandledRejection: ${error}`);
	process.exit(1)
})


//Router configurations
const router = express();
applyMiddleware(middleware, router);
applyRoutes(routes, router)
applyMiddleware(errorHandlers, router)

// Run server
const { PORT = 3000} = process.env;
// const server = http.createServer(router);

// router.listen(
// 	PORT, ()=>{
// 		console.log(`Server is running at http://localhost:${PORT} ...`)
// 	});
router.listen(PORT, ()=>{
	console.log(`Listening at port: ${PORT}`)
});

export const app = firebase.https.onRequest(router)