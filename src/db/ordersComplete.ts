import { sqlite3_db } from "./sqlite3";
import { Order } from './types';

interface OrdersGetArgs {
    orderId: number;
}

export const ordersComplete = async (args: OrdersGetArgs) => {
    console.log('ordersComplete db got args: ', args);

    const {
        orderId,
    } = args;


    const order = await new Promise((resolve, reject) => {
        const sql = `Select * from  orders where orderId = ${orderId};`;

        console.log('orders complete get query : ', { sql });

        sqlite3_db.get(
            sql,
            (error, row) => {
                if (error === null) {
                    resolve(row);
                } else {
                    reject(error);
                }
            }
        );
    });

    console.log('comp order: ', order);

    return await new Promise((resolve, reject) => {
        const sql = `update orders set completed = 1 where orderId = ${orderId};`;

        console.log('orders complete updayte query : ', { sql });

        sqlite3_db.get(
            sql,
            (error, row) => {
                if (error === null) {
                    resolve(row);
                } else {
                    reject(error);
                }
            }
        );
    });
}
