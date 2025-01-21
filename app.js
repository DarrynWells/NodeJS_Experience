//# Basic function calls

// function sayHello(name) {
//     console.log('Hello ' + name); // Core command
// }
// sayHello('Jill');

//--------------------------------------------------------------------------------------------------------
//# Functions and global variables

// window.console.log() // JS Engine Core objects belong to window
// globalThis.console.log() // Node Core objects belong to global

// var sayHello = function() {
//     // When we add variable it is added to the global object
// }
// window.sayHello(); // Available throught window
// // Avoid defining variables in global scope because if two modules use the same name it will be overwritten

// console.log(module); // Every file is a module. Everything added in file is in scope to the module
//--------------------------------------------------------------------------------------------------------
//# Importing methods from logger.js

// var logger = require('./logger.js'); // better to use const instead of var to prevent overwrites
// const logger = require('./logger.js');
// logger = 1 // will throw an error about assigning to const. Error will happen at compile time instead of runtimee
// logger.log('Using function exported from logger.js')

// // Instead of exporting an object, one can export the function itself and call as per below
// const log = require('./logger.js');
// log('Using function exported from logger.js')
//--------------------------------------------------------------------------------------------------------
//# Inbuilt Path module

// const path = require('path')
// require('./path')// Node would assume this is a file in your project and not a node module
// var pathObj = path.parse(__filename)
// console.log(pathObj)
//--------------------------------------------------------------------------------------------------------
//# Inbuilt OS module

// const os = require('os')
// var totalMemory = os.totalmem()
// var freeMemory = os.freemem()

// console.log('Total Memory ' + totalMemory);

// // Node JS is built using chromse v8 JS engine. Node JS is a runtime environment and builds on this V8 by adding additional functionality
// // ES6 / ES2015 : short for ECMAScript 6 (Specifications that defines what features are availbale in JavaScript - each browser will implement different feature sets)
// // V8 Engine in Node is upto date and implements many features liested in ECMA
//--------------------------------------------------------------------------------------------------------
//# New logging feature

// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`);
//--------------------------------------------------------------------------------------------------------
//# FS module

// const fs = require('fs');

// // Syncronous method - best to use Asyncronous methods
// const files = fs.readdirSync('./');
// console.log(files);

// // Async files have a call back function as second parameter. This function takes to parameters i.e. error and String array
// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files)
// });

// // Force an error
// function callback(err, files) {
//     if (err) console.log('Error: ', err);
//     else console.log('Result: ', files);
// }

// fs.readdir('$', callback);
//--------------------------------------------------------------------------------------------------------
//# Events Module

// Class def
// const EventEmitter = require("events");
// Object
// const emitter = new EventEmitter();

// emitter.on("messageLogged", function () {
//   console.log("Listener called");
// });

// // Raise event
// emitter.emit("messageLogged");

//---------------------------------------

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("messageLogged", function (arg) {
//   console.log("Listener called", arg);
// });

// emitter.emit("messageLogged", { id: 1, url: "http://" });

//---------------------------------------

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // Arrow function (addition to ES6 instead of using 'function')
// emitter.on("messageLogged", (arg) => {
//   console.log("Listener called", arg);
// });

// emitter.emit("messageLogged", { id: 1, url: "http://" });

//---------------------------------------

// const Logger = require("./logger2");
// const logger = new Logger();

// logger.on("messageLogged", (arg) => {
//   console.log(arg);
// });

// logger.log("message");

//--------------------------------------------------------------------------------------------------------
//# HTTP Module

// const http = require("http");

// const server = http.createServer();
// server.on("connection", (socket) => {
//   console.log("new connection...");
// });
// server.listen(3000);
// console.log("Listening on port 3000... ");

// Run app.js then open browser and type url localhost:3000 to trigger connection and event

//---------------------------------------

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url == "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000... ");

// open web browser and type url localhost:3000 or localhost:3000/api/courses
