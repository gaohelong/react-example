// axios封装, 根据环境加载.
if (process.env.NODE_ENV === 'production') {
    // export * from './api.prod'; ES6写法需要放到最外层所以改用cmd写法，如下:
    module.exports = require('./api.prod');
} else {
    module.exports = require('./api.dev');
}
