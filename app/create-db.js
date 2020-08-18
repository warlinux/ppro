require ( 'dotenv' ). config ();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : `${process.env.DB_HOST}`,
  port     : `${process.env.DB_PORT}`,
  user     : `${process.env.DB_USER}`,
  password : `${process.env.DB_PASSWORD}`
});


function createDatabase(conn){

      const sql = `CREATE DATABASE IF NOT EXISTS ${process.env.ENVIRONMENT}`

      conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('connect database!');
	  conn.end();
      });
}

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('create database!');
  createDatabase(connection);
})
