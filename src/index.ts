import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { routes } from "./test_routes";
import {APP_HTTP_PORT} from "./config";

console.log('app start !!!!!!')

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use(express.static('public'))

// create user 
// login user 

// get products
// create proguct 

// create order -> email user -> amdin order ->

app.get('/', routes.home)

app.post('/user/create', routes.userCreate);
app.post('/user/login', routes.userLogin);

app.get("*", routes.not_found)

// app.listen(Number(APP_HTTP_PORT), '0.0.0.0', () => {
app.listen(APP_HTTP_PORT, () => {
    console.log(`started on ${APP_HTTP_PORT}, http://localhost:${APP_HTTP_PORT}`);
});
