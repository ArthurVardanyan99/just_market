import { Database } from "sqlite3";
import * as path from "path";

console.log("sqlite3 call");

const db_file_path = path.resolve(__dirname, '../../', 'sql_lite.db')
console.log({ db_file_path })

export const sqlite3_db = new Database(db_file_path, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');

    sqlite3_db.all(` PRAGMA TABLE_INFO(ttt) `, (err, rows) => {
        if (err ) {
            throw err;
        }
        console.log({rows})
    })

});

sqlite3_db.run(
    `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        surname TEXT NOT NULL,
        pasword TEXT NOT NULL,
        email TEXT NOT NULL
    );`,
    (error) => { console.log('error on user table create: ', error) }
);
// sqlite3_db.run(
//     `ALTER TABLE users
//         CREATE COLUMN IF NOT EXISTS 
//     );`,
//     (error) => { console.log('error on user table create: ', error) }
// );