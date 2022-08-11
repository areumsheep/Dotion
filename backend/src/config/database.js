import mysql from 'mysql2';
require('dotenv').config();

var db_info = {
  host: 'localhost',
  port: '3306',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB
};

export const init = () => {
  return mysql.createConnection(db_info);
}
export const connect = (conn) => {
  conn.connect(function (err) {
    if (err) console.error('mysql connection error : ' + err);
    else console.log('mysql is connected successfully!');
  });
}