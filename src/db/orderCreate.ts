import * as crypto from 'crypto';
import { sqlite3_db } from "./sqlite3";
import { Order } from './types';

interface OrderCreateArgs {
    // orderId: number; //  INTEGER PRIMARY KEY AUTOINCREMENT,
    userId: number; //  INT NOT NULL,
    createDate: Date; //  INT NOT NULL,
    productIds: number[]; //  TEXT NOT NULL,
    completed: boolean; //  INT
}

export const orderCreate = (args: OrderCreateArgs) => {
    console.log('db orderCreate got: ', args);

    const {
        // orderId,
        userId,
        // createDate,
        productIds,
        // completed,
    } = args;


    const create_date_as_timestamp = new Date().getTime();
    const product_ids_as_string = productIds.join(',');

    return new Promise((resolve, reject) => {
        console.log('db order create call', args);

        const sql = `INSERT INTO orders (userId, createDate, productIds, completed)
        VALUES(${userId}, ${create_date_as_timestamp}, '${product_ids_as_string}',  0);`;

        console.log('C order', sql)

        sqlite3_db.run(
            sql,
            (error) => {
                if (error === null) {
                    resolve(args);
                } else {
                    reject(error);
                }
            }
        );
    });
}
