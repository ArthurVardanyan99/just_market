const POSTGRES_CONNECTION_URL_LOCAL =
  "postgres://postgres:postgres@localhost:5432/ttt";

const postgres_connection_url = 
    process.env.DATABASE_URL ?
      process.env.DATABASE_URL :
      POSTGRES_CONNECTION_URL_LOCAL;

const DEV_HTTP_PORT = 4997;

const APP_HTTP_PORT = process.env.PORT || DEV_HTTP_PORT;

export {
    postgres_connection_url,
    APP_HTTP_PORT,
};
