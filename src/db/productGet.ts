import { sqlite3_db } from "./sqlite3";

interface ProductGetArgs {
    type: string | undefined;
    id: number | undefined;
}

export const productGet = (args: ProductGetArgs) => {
    const {
        type,
        id,
    } = args;

    return new Promise((resolve, reject) => {
        console.log('db product create call', args);

        let sql_query = 'SELECT * FROM products'

        let query_conditions = []

        if (type || id) {
            sql_query += ' Where '
        }

        if (type) {
            query_conditions.push(` productType = "${type}"`)
        }

        if (id) {
            query_conditions.push(` productId = ${id}`)
        }

        if (query_conditions.length === 1) {
            sql_query += query_conditions[0]
        } else {
            sql_query += query_conditions.join('and');
        }

        console.log({ sql_query });

        sqlite3_db.all(
            sql_query,
            (error, rows) => {
                if (error === null) {
                    resolve(rows);
                } else {
                    reject(error);
                }
            }
        );
    });
}
