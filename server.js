var DSServer = require("deepstream.io");
var DSRethinkConnector = require("deepstream.io-storage-rethinkdb");

let rhost=process.env.rhost || 'localhost';
let rdb=process.env.rdb || 'deepstream';
//let rport=process.env.rport || '28015'
console.log('The value of host is:', rhost);
console.log('The value of database is:', rdb);

// Setup the deepstream server
var server = new DSServer();
//server.set("host", "localhost");
//server.set("port", 6020);

// Setup the RethinkDB storage connector
server.set("storage", new DSRethinkConnector({
    //port: process.env.PORT,
    //host: process.env.host,
    host: rhost,
    port: 28015,
    splitChar: "/",
    database: rdb
   // defaultTable: "dsdemo"
}));

// Run the server
server.start();
