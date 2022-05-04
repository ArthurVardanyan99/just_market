import { sqlite3_db } from "./sqlite3";

interface ProductGetArgs {
    name_search: string | undefined,
    type: string | undefined;
    id: number | undefined;
}

export const productGet = (args: ProductGetArgs) => {
    const {
        type,
        id,
        name_search,
    } = args;

    return new Promise((resolve, reject) => {
        console.log('db product get call', args);

        let sql_query = 'SELECT * FROM products'

        let query_conditions = []

        if (type || id || name_search) {
            sql_query += ' Where '
        }

        if (type) {
            query_conditions.push(` productType = "${type}"`)
        }

        if (id) {
            query_conditions.push(` productId = ${id}`)
        }

        if (name_search) {
            query_conditions.push(` productName LIKE '%${name_search}%'`)
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
