/* mock */
const Mock = require('mockjs');
const Random = Mock.Random;

/* faker */
const faker = require('faker');
const userDetail = Mock.mock({
    'list|10': [{
        'id|+1': 1,
        'title|+1': [
            '4分钟速览《大国外交》之《大道之行》',
            '周杰伦出道多年 终于开通了自己的社交账号',
            '人民币兑美元中间价升破6.63关口 续创一年新高'
        ], 
        'avatar': faker.image.avatar
    }]
});

module.exports = userDetail.list;
