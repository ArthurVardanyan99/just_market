import * as crypto from 'crypto';
import { sqlite3_db } from "./sqlite3";

interface UserCreateArgs {
    // productId
    productUrl: string;
    productName: string;
    productPrice: string;
    productType: string;
}

export const productCreate = (args: UserCreateArgs) => {
    const {
        productUrl,
        productName,
        productPrice,
        productType,
    } = args;

    return new Promise((resolve, reject) => {
        console.log('db product create call', args);

        sqlite3_db.run(
            `INSERT INTO products (productUrl, productName, productPrice, productType)
            VALUES("${productUrl}", "${productName}", "${productPrice}", "${productType}");`,
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
