import { sqlite3_db } from "./sqlite3";
import { Order } from './types';

interface OrdersGetArgs {
    userId: number | undefined;
    completed: boolean | undefined;
}

export const ordersGet = (args: OrdersGetArgs): Promise<Order[]> => {
    console.log('ordersGet db got args: ', args);

    const {
        completed,
        userId,
    } = args;

    return new Promise((resolve, reject) => {
        console.log('db orders get call', args);

        let sql_query = 'SELECT * FROM orders'

        let query_conditions = []

        if (typeof completed === 'boolean' || userId) {
            sql_query += ' Where '
        }

        if (userId) {
            query_conditions.push(` userId = ${userId}`)
        }

        if (typeof completed === 'boolean') {
            let int_flag = 0;
            if (completed === false) { int_flag = 0 }
            if (completed === true) { int_flag = 1 }
            query_conditions.push(` completed = ${int_flag}`)
        }

        if (query_conditions.length === 1) {
            sql_query += query_conditions[0]
        } else {
            sql_query += query_conditions.join(' and ');
        }

        console.log('orders get sql query : ', { sql_query });

        sqlite3_db.all(
            sql_query,
            (error, rows) => {
                if (error === null) {
                    const orders: Order[] = rows.map((row) => ({
                        orderId: row.orderId,
                        userId: row.userId,
                        createDate: new Date(row.createDate),
                        productIds: row.productIds.split(',').map((s: any) => Number(s)),
                        completed: Boolean(row.completed),
                    }))
                    resolve(orders);
                } else {
                    reject(error);
                }
            }
        );
    });
}
