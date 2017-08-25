import Mock from 'mockjs';
const Random = Mock.Random;

Mock.mock('/mock/admin/list', {
    'code': 0,
    'msg': '获取成功.',
    'pageParams': {
        'cutPage': 1,
        'totalCnt': 78,
        'pageSize': 15
    },
    'list|1-78': [{
        'id|+1': 1,
        'title': Random.cword('零一二三四五六七八九十', 6, 11),
        // 'title': Random.url(),
        'date': Random.date('yyyy-MM-dd HH:mm:ss')
    }]
});
