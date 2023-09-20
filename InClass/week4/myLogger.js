const error = "Error";
const warning = "WARNING";
const info = "INFO";

function logIt( message, level=info ){
    console.log( `MSG: Level:${level} MSG:${message}`);
}
function logItFancy( message, level=info ){
    console.log( `------------ MSG: Level:${level} MSG:${message} -------`);
}

module.exports.logItFancy = logItFancy;
module.exports.logIt = logIt;
module.exports.error = error;