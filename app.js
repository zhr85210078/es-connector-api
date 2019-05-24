var server = require('./lib/config/serverConfig.js');
var route = require('./lib/config/routesConfig.js');
var plugins = require('./lib/config/pluginConfig.js');
var logger = require('./lib/config/loggerConfig.js');

(async () => {
    await server.register(plugins);

    route.forEach(function (api) {
        server.route(api);
    });

    server.route({
        path: '/',
        method: 'GET',
        handler(request, h) {
            return h.response().redirect('/docs');
        }
    })

    try {
        await server.start();
        
        logger.info('Server running at:', server.info.uri);
        server.events.on('response', (request, event, tags) => {
            logger.info(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
        });

    } catch (err) {
        logger.error(err);
    }
})();


