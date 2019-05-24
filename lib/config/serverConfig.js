var Hapi = require('hapi');

var server = Hapi.server({
    host: process.env.IP,
    port: process.env.PORT
})

module.exports = server;