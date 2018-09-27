var joi = require('joi');
var esCrawler = require('es-mongodb-sync/index.js');
var config = require('../../config.json');
var path = require("path");

var esCrawler_addWatcher = {
    method: 'POST',
    path: '/esCrawler/addWatcher',
    config: {
        description: 'addWatcher esCrawler',
        notes: 'addWatcher esCrawler api',
        tags: ['api'],
        validate: {
            payload: {
                mongodb: joi.object(),
                elasticsearch: joi.object()
            }
        }
    },
    handler: function (request, reply) {
        return esCrawler.addWatcher(request.payload.elasticsearch.e_index, request.payload);
    }
};

var esCrawler_updateWatcher = {
    method: 'POST',
    path: '/esCrawler/updateWatcher',
    config: {
        description: 'updateWatcher esCrawler',
        notes: 'updateWatcher esCrawler api',
        tags: ['api'],
        validate: {
            payload: {
                mongodb: joi.object(),
                elasticsearch: joi.object()
            }
        }
    },
    handler: function (request, reply) {
        return esCrawler.updateWatcher(request.payload.elasticsearch.e_index, request.payload);
    }
};

var esCrawler_deleteWatcher = {
    method: 'POST',
    path: '/esCrawler/deleteWatcher/{name}',
    config: {
        description: 'deleteWatcher esCrawler',
        notes: 'deleteWatcher esCrawler api',
        tags: ['api'],
        validate: {
            params: {
                name: joi.string().required()
            }
        }
    },
    handler: function (request, reply) {
        var fileName = request.params.name;
        return esCrawler.deleteWatcher(fileName);
    }
};

var esCrawler_isExistWatcher = {
    method: 'GET',
    path: '/esCrawler/isExistWatcher/{name}',
    config: {
        description: 'isExistWatcher esCrawler',
        notes: 'isExistWatcher esCrawler api',
        tags: ['api'],
        validate: {
            params: {
                name: joi.string().required()
            }
        }
    },
    handler: function (request, reply) {
        var fileName = request.params.name;
        return esCrawler.isExistWatcher(fileName);
    }
};

module.exports = [esCrawler_addWatcher, esCrawler_updateWatcher, esCrawler_deleteWatcher, esCrawler_isExistWatcher];
