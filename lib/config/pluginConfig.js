var Pack = require('../../package.json');

var SwaggeredOptions = {
    info: {
        title: 'ESConnector API',
        description: 'Powered by node, hapi, joi, hapi-swaggered and hapi-swaggered-ui',
        contact: {
            name: 'horan'
        },
        version: Pack.version
    }
};

var SwaggerUIOptions = {
    title: 'es-connector-api',
    path: '/docs',
    authorization: false,
    swaggerOptions: {
        validatorUrl: null
    }
};

module.exports = [
    require('inert'),
    require('vision'),
    {
        plugin: require('hapi-swaggered'),
        options: SwaggeredOptions
    },
    {
        plugin: require('hapi-swaggered-ui'),
        options: SwaggerUIOptions
    }
];
