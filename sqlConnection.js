var mysql = require('mysql');
var databaseConnectionData = require("./config/sqlConnectionLocal.json");

var connection = mysql.createConnection(databaseConnectionData);

function getPharmacys(category) {
    var query = "SELECT * FROM `pharmacy` WHERE `category` = '" + category + "'";
    connection.connect(function (err) {
        if (!err) {
            console.log("Connected");
            connection.query(query, function (err, rows, fields) {
                if (!err) {
                    console.log('The solution is: ', rows);
                    return rows;
                } else {
                    console.log('Error while performing Query.');
                    return "Error while performing Query."
                }
            });
        } else {
            console.log("Error connecting database ... nn");
            console.log(err);
            return "Error connecting database ...";
        }
        connection.end();
    });
};

function getPharmacysCallback(category,callback) {
    var query = "SELECT * FROM `pharmacy` WHERE `category` = '" + category + "'";
    connection.connect(function (err) {
        if (!err) {
            console.log("Connected");
            connection.query(query, callback);
            connection.end();
        } else {
            console.log("Error connecting database ... nn");
            console.log(err);
            return "Error connecting database ...";
        }
       
    });
};
module.exports.getPharmacys = getPharmacysCallback;