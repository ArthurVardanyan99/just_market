import * as crypto from 'crypto';
import { sqlite3_db } from "./sqlite3";

interface UserCreateArgs {
    email: string;
    password: string;
    name: string;
    surname: string;
}

export const userCreate = (args: UserCreateArgs) => {
    const {
        email,
        name,
        password,
        surname,
    } = args;

    return new Promise((resolve, reject) => {
        const password_hash =
        crypto.createHash('sha256').update(password).digest('hex');

        console.log({ password_hash })

        console.log('db user create call', args);

        sqlite3_db.run(
            `INSERT INTO users (name, surname, password, email)
            VALUES("${name}", "${surname}", "${password_hash}", "${email}");`,
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
