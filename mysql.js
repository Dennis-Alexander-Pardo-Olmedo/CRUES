const mysql = require('mysql2');
const connect = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password :'12345',
    database : 'CRUED',
    multipleStatements: true
});


connect.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('la conexion se ha realisado con la base de datos ');
    }
  });
  module.exports = connect;
  