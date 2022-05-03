import * as crypto from 'crypto';
import { sqlite3_db } from "./sqlite3";
import { Order } from './types';

interface OrderCreateArgs {
    // orderId: number; //  INTEGER PRIMARY KEY AUTOINCREMENT,
    userId: number; //  INT NOT NULL,
    createDate: Date; //  INT NOT NULL,
    productIds: {id: number, count: number}[]; //  TEXT NOT NULL,
    completed: boolean; //  INT
    address: string;
    phone_number: string;
}

export const orderCreate = (args: OrderCreateArgs): Promise<number> => {
    console.log('db orderCreate got: ', args);

    const {
        // orderId,
        userId,
        // createDate,
        productIds,
        // completed,
        address,
        phone_number, 
    } = args;


    const create_date_as_timestamp = new Date().getTime();
    console.log('productIds: ', productIds)
    const product_ids_as_string = JSON.stringify(productIds);
    console.log('product_ids_as_string: ', product_ids_as_string)

    return new Promise((resolve, reject) => {
        console.log('db order create call', args);

        const sql = `INSERT INTO orders (userId, createDate, productIds, completed, address, phone_number)
        VALUES(${userId}, ${create_date_as_timestamp}, '${product_ids_as_string}',  0, '${address}', '${phone_number}');`;

        console.log('C order', sql)

        sqlite3_db.run(
            sql,
            function(error) {
                if (error === null) {
                    resolve(this.lastID);
                } else {
                    reject(error);
                }
            }
        );
    });
}
