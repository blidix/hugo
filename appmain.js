'use strict'
const http = require('http');
const Bot = require('messenger-bot');
var apiai = require('apiai');
var app = apiai("043edfb73aad43449e2188b7d568c605");


//este codigo es la mezcla de app.js y de main.js

let bot = new Bot({
  token: 'EAAN1DiveYDABACw0BFYEranNoqEOaaJGvctmx0Fer9OyCOCdowCg9MtrUXoDtMwLVJdgHyw0ZCpR7C8bSkS9WqpdDa2eMmEa3mslZCYuzBEpxpLSs3Tno92bUU8XZBfeTTmbTitJWdmeI1jUKLCSZB4uXP3Yi0QZAAbSiPy6j5AZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})
bot.on('message', (payload, reply) => {
  let text = payload.message.text
  var request = app.textRequest(text);

  request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000);
//-------

