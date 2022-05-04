import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import fs from "fs";
import multer from "multer";
import bodyParser from 'body-parser';


import { db_status, initDB } from './db/sqlite3';
import {routes} from "./test_routes";
import {APP_HTTP_PORT} from "./config";

import {
    createEmailText,
  } from './db';

console.log('App started');

initDB().finally(() => {
    console.log('DB status: ', db_status);
      
    //   createEmailText(9)
})

const upload = multer({
    dest: path.resolve(__dirname, "../public/tmp"),
});

const app = express();

app.use(express.urlencoded({ extended: false }))
// app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/product/list/:id', routes.getProductsById);
app.get('/product/list', routes.getProducts);

app.post('/order/create', routes.createOrder);
app.get('/order/list/:id?', routes.getOrders);
app.get('/order/complete/:id', routes.completeOrder);

app.post("/upload",
    upload.single("file"),
    (req: Request, res: Response) => {
        if (!req.file) {
            res.end()
            return;
        }

        const tempPath = req.file && req.file.path;
        const targetPath =
            path.join(__dirname, `../public/Images/${req.file.originalname}`);

        console.log({ targetPath, tempPath })

        fs.rename(tempPath, targetPath, err => {
            if (err) {
                res.status(404);
                res.end();
                return;
            }
        });

        res.end(`File uploaded, name: ${req.file.originalname}`, )
    }
);

app.get("*", routes.not_found)

app.listen(APP_HTTP_PORT, () => {
    console.log(`started on ${APP_HTTP_PORT}, http://localhost:${APP_HTTP_PORT}`);
});
