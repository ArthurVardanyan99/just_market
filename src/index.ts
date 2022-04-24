import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { db_status, initDB } from './db/sqlite3';
import {routes} from "./test_routes";
import {APP_HTTP_PORT} from "./config";

console.log('App started');

initDB().finally(() => {
    console.log('DB status: ', db_status);
})

const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(cors());

app.use(express.static('public'))


// get products
// create proguct

// create order -> email user -> amdin order ->

app.get('/', routes.home)

app.post('/user/create', routes.userCreate);
app.post('/user/login', routes.userLogin);

app.post('/product/create', routes.createProduct);
app.get('/product/list', routes.getProducts);

app.get("*", routes.not_found)

// app.listen(Number(APP_HTTP_PORT), '0.0.0.0', () => {
app.listen(APP_HTTP_PORT, () => {
    console.log(`started on ${APP_HTTP_PORT}, http://localhost:${APP_HTTP_PORT}`);
});
