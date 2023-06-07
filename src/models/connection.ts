import mysql from "mysql2";

const connection = mysql.createPool({
    host: process.env.PSQL_HOST,
    user: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    database: process.env.PSQL_DB
});

export default connection;