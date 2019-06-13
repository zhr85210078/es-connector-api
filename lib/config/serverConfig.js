var Hapi = require('hapi');

var server = Hapi.server({
    host:  process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    port: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
})

module.exports = server;