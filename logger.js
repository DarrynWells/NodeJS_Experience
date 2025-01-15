
var url = 'http:/mylogger.io/log';

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// Addding method log to exports objects and setting it to desired variable
// module.exports.log = log;

// If you are only exporting one function it is better to export function iteself
module.exports = log;