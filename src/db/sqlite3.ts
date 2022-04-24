import { Database } from "sqlite3";
import * as path from "path";
import { resolve } from "path";

const db_file_path = path.resolve(__dirname, '../../', 'sql_lite.db')
console.log("db_file_path: ", db_file_path);

export let sqlite3_db: Database;
export let db_status: string = '';

const createDBConnection = (): Promise<Database> => {
    return new Promise((resolve, reject) => {
        sqlite3_db = new Database(db_file_path, (error) => {
            if (error) {
                db_status = "Can't connect to DB";
                reject(error);
                return;
            }
            db_status = "Successfully connected to DB";
            resolve(sqlite3_db);
        });
    })
}

const createTables = (): Promise<void> => {
    return new Promise((resolve, reject) => {
        sqlite3_db.run(
            `CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                surname TEXT NOT NULL,
                password TEXT NOT NULL,
                email TEXT NOT NULL
            );`,
            (error) => {
                if (error !== null) {
                    reject(error);
                    console.log('Error on User table create: ', error)
                    return;
                }
            }
        );

        sqlite3_db.run(
            `CREATE TABLE IF NOT EXISTS products (
                productId INTEGER PRIMARY KEY AUTOINCREMENT,
                productUrl TEXT NOT NULL,
                productName TEXT NOT NULL,
                productPrice TEXT NOT NULL,
                productType TEXT NOT NULL
            );`,
            (error) => {
                if (error !== null) {
                    reject(error);
                    console.log('Error on Products table create: ', error)
                    return;
                }
            }
        );

        resolve();
    })
}

export const initDB = async () => {
    await createDBConnection();
    await createTables();
};
