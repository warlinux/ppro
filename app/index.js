require ( 'dotenv' ). config ();
const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

const router = express.Router();
router.get('/', (req, res) =>{
    execSQLQuery('SELECT message FROM message limit 1', res);
})
app.use('/', router);

app.listen(port);
console.log('Server Running!');

function execSQLQuery(sqlQry, res){
  const connection = mysql.createConnection({
	  host     : `${process.env.DB_HOST}`,
	  port     : `${process.env.DB_PORT}`,
  	  user     : `${process.env.DB_USER}`,
  	  password : `${process.env.DB_PASSWORD}`,
	  database : `${process.env.DB_DATABASE}`
  });

  connection.query(sqlQry, function(error, results, fields){
      if(error)
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('request OK!');
  });
}
