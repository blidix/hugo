

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
    var responseMessage = '';
    for (var i = 0; i < jsonObjet.length; i++) {
        responseMessage += jsonObjet[i].name + "\n";
        responseMessage += "-------\n";
    }
    return responseMessage;
}

module.exports.encode = encode;
module.exports.humanMessage = humanMessage;