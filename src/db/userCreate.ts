import { sqlite3_db } from "./sqlite3";

interface UserCreateArgs {
    email: string;
    passowrd: string;
    name: string;
    surname: string;
}

export function userCreate(args: UserCreateArgs) {
    const {
        email,
        name,
        passowrd,
        surname,
    } = args;

    console.log('db user create call', args);

    sqlite3_db.run(
        `INSERT INTO users (name, surname, pasword, email)
        VALUES("${name}", "${surname}", "${passowrd}", "${email}");`,
        (error) => { console.log('error on NEW user create: ', error) }
    )

}
