'use strict'
const http = require('http');
const Bot = require('messenger-bot');

//funcion de prueba

//funcion de

let bot = new Bot({
  token: 'EAAN1DiveYDABACw0BFYEranNoqEOaaJGvctmx0Fer9OyCOCdowCg9MtrUXoDtMwLVJdgHyw0ZCpR7C8bSkS9WqpdDa2eMmEa3mslZCYuzBEpxpLSs3Tno92bUU8XZBfeTTmbTitJWdmeI1jUKLCSZB4uXP3Yi0QZAAbSiPy6j5AZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})
bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err



    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000);