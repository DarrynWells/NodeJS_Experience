const EventEmitter = require("events");

class Logger extends EventEmitter {
  // When function is inside class it doesnt need keyword 'function' and can be called a method instead
  log(message) {
    console.log(message);
    // Raise event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
