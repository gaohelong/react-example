// 模拟接口.
// const Mock = require('mockjs');
import Mock from 'mockjs';

Mock.mock('/mock/admin/login', {
    'code': 0,
    'token': 'token2017',
    'userinfo': {
        'user': 'longcloud',
        'age': 21
    },
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
});
