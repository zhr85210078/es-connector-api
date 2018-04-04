var path = require("path");
var filePath = path.join(__dirname, '../../crawlerData');
var esCrawler = require('es-mongodb-sync/index.js');

exports.startAllSchedules = function () {
    esCrawler.start(filePath);
};