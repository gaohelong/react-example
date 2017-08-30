/* mock */
const Mock = require('mockjs');
const Random = Mock.Random;

/* faker */
const faker = require('faker');

/* user list */
let startId = 1;
let totalCnt = 78;
const userList = Mock.mock({
    'code': 0,                 
    'msg': '获取成功.',        
    'pageParams': {
        'cutPage': 1,          
        'totalCnt': totalCnt,  
        'pageSize': 15         
    },                         
    'list|78': [{
        // 'id|+1': 1,         
        'id': function() {     
            if (startId > totalCnt) {       
                startId = 1;
            }

            return startId++;
        },
        'title|+1': [
            '4分钟速览《大国外交》之《大道之行》',
            '周杰伦出道多年 终于开通了自己的社交账号',
            '人民币兑美元中间价升破6.63关口 续创一年新高'
        ],
        // 'title': Random.cword('零一二三四五六七八九十', 6, 11),
        // 'title': Random.url(),       
        'date': Random.date('yyyy-MM-dd HH:mm:ss')
    }]

});

module.exports = userList;
