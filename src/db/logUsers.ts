import { sqlite3_db } from "./sqlite3";

export function logUsers() {

    sqlite3_db.all(
        `SELECT * from users;`,
        (err, rows) => { console.log('get usrs error', err, 'rows: ', rows) }
    )

}
