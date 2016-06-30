var julyTurns = ["null", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "A", "B"];
var date = new Date();
var currentDay = date.getDate();

function getCategoryToday() {
    return julyTurns[currentDay];
}

module.exports.getCategoryToday = getCategoryToday;