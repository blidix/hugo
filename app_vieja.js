'use strict'
const http = require('http');
const Bot = require('messenger-bot');
var sqlConnection = require('./sqlConnection.js').getPharmacys;
var categoryByDate = require('./categoryDateCalculator.js').getCategoryToday;
var SQLtoJSONmodule = require('./SQLtoJSONmodule.js').encode;
var humanMessage = require('./SQLtoJSONmodule.js').humanMessage;

var deTurnoPharmacys;
var jsonObjet;
let response;


function setDeTurnoPharmacys(rows) {
  deTurnoPharmacys = rows;
}

function callbackFunction(err, rows, fields) {
  if (!err) {
    setDeTurnoPharmacys(rows);
    response = humanMessage(SQLtoJSONmodule(rows, jsonObjet));
    console.log(response);
  } else {
    console.log('Error while performing Query.');
  }
}

sqlConnection(categoryByDate(), callbackFunction);

let bot = new Bot({
  token: 'EAAN1DiveYDABACw0BFYEranNoqEOaaJGvctmx0Fer9OyCOCdowCg9MtrUXoDtMwLVJdgHyw0ZCpR7C8bSkS9WqpdDa2eMmEa3mslZCYuzBEpxpLSs3Tno92bUU8XZBfeTTmbTitJWdmeI1jUKLCSZB4uXP3Yi0QZAAbSiPy6j5AZDZD',
  verify: 'VERIFY_TOKEN'
})
bot.on('error', function (err) {
  console.log(err.message);
});

bot.on('message', function (payload, reply) {

  //let text = payload.message.text
  //let text = "Respuesta";

  bot.getProfile(payload.sender.id, function (err, profile) {
    if (err) { 
      console.log(err);
      throw err };
    reply({ text : response }, function (err) {
      if (err) { throw err; }
      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    });
  });
});

http.createServer(bot.middleware()).listen(3000);