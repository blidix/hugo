var apiai = require('apiai');
 
var app = apiai("043edfb73aad43449e2188b7d568c605");
 
var request = app.textRequest('quiero 2 cervezas');
 
request.on('response', function(response) {
    console.log(response);
});
 
request.on('error', function(error) {
    console.log(error);
});
 
request.end()