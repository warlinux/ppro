require ( 'dotenv' ). config ();
const mysql      = require('mysql');
const connection = mysql.createConnection({
	  host     : `${process.env.DB_HOST}`,
	  port     : `${process.env.DB_PORT}`,
 	  user     : `${process.env.DB_USER}`,
	  password : `${process.env.DB_PASSWORD}`,
	  database : `${process.env.DB_DATABASE}`
});

function createTable(conn){

     const sql = `CREATE TABLE IF NOT EXISTS message(
                         id int,
                          message varchar(255)not null
                      )`; 


     conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('create table ok!');
      });
}

function insertMessage(conn){
     const sql = `INSERT INTO message (id,message) VALUES ('1','Hello World ${process.env.ENVIRONMENT}')`;

     conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log('added message!');
      });
}

function readMessage(conn){
     const sql = `select message FROM message where id=1 limit 1`;

     conn.query(sql, function (error, results, fields){
          if(error) return console.log(error);
          console.log(results);
          conn.end();
      });
}

connection.connect(function(err){
  if(err) return console.log(err);
  console.log('connection ok!');
  createTable(connection);
  insertMessage(connection);
  readMessage(connection);
})
