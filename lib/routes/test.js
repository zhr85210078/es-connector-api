var joi = require('joi');

var toTest = {
    method: 'POST',
    path: '/test/toTest/{testParams}',
    options: {
        description: '测试',
        notes: '测试api',
        tags: ['api'],
        validate: {
            params: {//路径传参
                testParams: joi.string().required().description('测试路径(path)传参').default('a')
            },
            query: {//带参数key-value
                testQuery: joi.string().required().description('测试(key-value)传参').default('b')
            },
            payload: {//表单
                testPayLoad1: joi.string().required().description('测试表单(form)传参').default('c'),
                testPayLoad2: joi.object({
                    testPayLoad2Child: joi.string().required().description('测试payload对象子元素').default('d')
                }).required().description('测试payload对象')
            }
        }
    },
    handler: function (request, h) {
        var testPayLoad1 = request.payload.testPayLoad1;
        var testPayLoad2 = request.payload.testPayLoad2.testPayLoad2Child;
        var testQuery = request.query.testQuery;
        var testParams = request.params.testParams;
        return '测试testParams：' + testParams + '; 测试testQuery:' + testQuery + '; 测试testPayLoad1:' + testPayLoad1 + '; 测试testPayLoad2:' + testPayLoad2;
    }
};

module.exports = [toTest];