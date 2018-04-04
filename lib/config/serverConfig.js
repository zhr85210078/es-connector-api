var Hapi = require('hapi');
var config = require('../../config.json');

var server=Hapi.server({
    host: config.host,
    port: config.port
});

module.exports = server;