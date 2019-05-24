var Hapi = require('hapi');

var server=Hapi.server({
    host: "localhost",
    port: process.env.PORT
})

module.exports = server;