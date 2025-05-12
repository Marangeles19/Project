var mysql = require('mysql2');
require('dotenv').config();

var con = mysql.createPool({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DATABASE
});

con.getConnection((err, connection) => {
  if (err) { 
    console.error ("Error en la conexion: " +err.message)
  }else{
    console.log (" Conexion exitosa") 
    connection.release
   }
});

module.exports = con.promise();