import { sqlite3_db } from "./sqlite3";

interface ProductGetArgs {
    type: string | undefined;
}

export const productGet = (args: ProductGetArgs) => {
    const {
        type,
    } = args;

    return new Promise((resolve, reject) => {
        console.log('db product create call', args);

        if (!type) {
            sqlite3_db.all(
                `SELECT * FROM products;`,
                (error, rows) => {
                    if (error === null) {
                        resolve(rows);
                    } else {
                        reject(error);
                    }
                }
            );
        } else {
            sqlite3_db.all(
                `SELECT * FROM products
                WHERE productType = "${type}"`,
                (error, rows) => {
                    if (error === null) {
                        resolve(rows);
                    } else {
                        reject(error);
                    }
                }
            );
        }
    });
}
