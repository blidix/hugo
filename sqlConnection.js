var mysql      = require('mysql');
var express    = require("express");

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'blidix',
  port     : '3316',
  database : 'deTurnoDB'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});

var app = express();

app.get("/",function(req,res){
connection.query('SELECT * FROM `pharmacy`', function(err, rows, fields) {
connection.end();
  if (!err)
    console.log('The solution is: ', rows);
  else
    console.log('Error while performing Query.');
  });
});

app.listen(3000);

//connection.end();