'use strict'
const http = require('http');
const Bot = require('messenger-bot');

let bot = new Bot({
  token: 'EAAN1DiveYDABAMjbLBlVcGxcVc99LVctv5DtiVIjgsTfDZAZBon3j7mZB1kDiILXU7DkdcOOMG72x0buFUBL3KPFf9ZBi4zlW1KmltAq1r5EEMdpPuKq7Up6ukFSdlYbqzZCOXh3gmUAjlz9oqVGzB34kwdHIXZAGMaStuDbSZBrQZDZD',
  verify: 'VERIFY_TOKEN'
})
//curl -ik -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=EAAN1DiveYDABAMjbLBlVcGxcVc99LVctv5DtiVIjgsTfDZAZBon3j7mZB1kDiILXU7DkdcOOMG72x0buFUBL3KPFf9ZBi4zlW1KmltAq1r5EEMdpPuKq7Up6ukFSdlYbqzZCOXh3gmUAjlz9oqVGzB34kwdHIXZAGMaStuDbSZBrQZDZD"
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