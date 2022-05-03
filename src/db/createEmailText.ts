import { sqlite3_db } from "./sqlite3";
import { Order } from './types';

interface OrdersGetArgs {
    userId: number | undefined;
    completed: boolean | undefined;
}

export const createEmailText = async (id: number): Promise<string> => {
    const order_id = id;

    const order: Order = await new Promise((resolve, reject) => {
        sqlite3_db.get(
            `select * from orders where orderId = ${id}`,
            (error, row) => {
                if (error === null) {
                    resolve(row);
                } else {
                    reject(error);
                }
            }
        );
    });

    console.log('createEmailText order: ', order);
    // @ts-ignore
    order.productIds = JSON.parse(order.productIds);
    console.log('createEmailText order 2: ', order);

    // const product_ids = Js order.productIds


    let products: any[] = await new Promise((resolve, reject) => {
        sqlite3_db.all(
            `select * from products where productId in (${order.productIds.map(pd => pd.id).join(',')})`,
            (error, rows) => {
                if (error === null) {
                    resolve(rows);
                } else {
                    reject(error);
                }
            }
        );
    });

    products.forEach(element => {
        element.productPrice = Number(element.productPrice)
    });

    console.log('createEmailText products : ', products);

    const user_id = order.userId;

    const user: Order = await new Promise((resolve, reject) => {
        sqlite3_db.get(
            `select * from users where id = ${user_id}`,
            (error, row) => {
                if (error === null) {
                    resolve(row);
                } else {
                    reject(error);
                }
            }
        );
    });

    console.log('createEmailText user : ', user);

    let total_price = 0;

    for (const p of products) {
        console.log('products: ', p);
        // @ts-ignore
        const {id: prod_id, count} = order.productIds.find(ids => ids.id === p.productId);
        console.log('data: ', {prod_id}, {count});

        total_price += count * p.productPrice;
    }

    console.log('createEmailText total_price : ', total_price);

    return `
        OrderID +
        UserID +
        UserName +
        UserSurname +
        UserEmail +
        
        UserPhone + 
        UserAddress +
        
        ProductName
        ProductPrice
        ProductCount
        TotalPrice
    `;
}
