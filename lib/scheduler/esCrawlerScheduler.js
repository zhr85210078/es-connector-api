var path = require("path");
var esCrawler = require('es-mongodb-sync/index.js');

exports.startAllSchedules = function () {
    esCrawler.start();
};