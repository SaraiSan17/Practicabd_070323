const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'sql10.freemysqlhosting.net',
    user: 'sql10450260',
    password:'MUuFGjypP2',
    database:'sql10450260',
    port:'3306',
    multipleStatements: true
});


mysqlConnection.connect(function(err){
    if(err){
      console.log(err);
      return;
    }else{
      console.log("La base de datos esta conectada");
    }


  });

  module.exports = mysqlConnection;
