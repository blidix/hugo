var utf8 = require('utf8');

function encode(sqlRows, jsonObjet) {

    var jsonObjet = [];
    for (var i = 0; i < sqlRows.length; i++) {
        var pharmacyObjet = {
            name: sqlRows[i].name,
            address: sqlRows[i].address,
            category: sqlRows[i].category,
            location: sqlRows[i].location
        };
        jsonObjet[i] = pharmacyObjet;
    }
    return jsonObjet;
}
function humanMessage(jsonObjet) {
    var seeOnMapText = "Ver en Mapa";
    var geoLocation = jsonObjet.location;
    var mapsPath = "https://www.google.com.ar/maps/place/";
    var responseMessage = '';
    responseMessage += jsonObjet.name + "\n";
    responseMessage += jsonObjet.address + "\n";
    return responseMessage;
}

function humanButtonMessage(jsonObjet) {
    var seeOnMapText = "Ver en Mapa";
    var geoLocation = jsonObjet.location.trim();
    var mapsPath = "https://www.google.com.ar/maps/place/";
    var responseMessage = jsonObjet.name + "\n";
    responseMessage += jsonObjet.address + "\n";
    return {
        type: "template",
        payload: {
            template_type: "button",
            text: utf8.encode(responseMessage),
            buttons: [{
                type: "web_url",
                url: mapsPath + geoLocation,
                title: "Ver en Mapa"
            }]
        }
    };
}

function humanPostBackMessage(jsonObjet) {

    var responseMessage = "¿Quieres más Farmacias de Turno?";
    var attachment = {
        type: "template",
        payload: {
            template_type: "button",
            text: responseMessage,
            buttons: [ {
              type: "postback",
              title: "Dame Más!",
              payload: "USER_DEFINED_PAYLOAD"
            }]
        }
    };
    return attachment;
}

module.exports.encode = encode;
module.exports.humanMessage = humanMessage;
module.exports.humanButtonMessage = humanButtonMessage;
module.exports.humanPostBackMessage = humanPostBackMessage;
