import * as crypto from 'crypto';
import { sqlite3_db } from "./sqlite3";

interface UserLoginArgs {
    email: string;
    password: string;
}


export const loginUser = async (args: UserLoginArgs) => {
    const {
        email,
        password,
    } = args;

    return new Promise((resolve, reject) => {
        const password_hash =
            crypto.createHash('sha256').update(password).digest('hex');

        console.log('login : ', { password_hash });

        sqlite3_db.get(
            `SELECT * from users
            where email = "${email}"
            and password = "${password_hash}";`,
            (error, rows) => {
                if (error === null) {
                    resolve(rows);
                    return;
                }
                reject(error);
            }
        )
    });
}
