## 【Javascript】
[Ecma](https://www.ecma-international.org/)
[Microsoft](https://msdn.microsoft.com/zh-cn/library/d1et7k7c(v=vs.94).aspx)
[Mozilla](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)
[Exploring](http://exploringjs.com/)
[W3Cschool](https://www.w3cschool.cn/ecmascript/)

## 【Mozilla】
[Web](https://developer.mozilla.org/zh-CN/docs/Web)
[Web-Api](https://developer.mozilla.org/zh-CN/docs/Web/API)

## 【ruanyifeng】
[Chinease](http://www.ruanyifeng.com/blog/javascript/)

## 【webpack】
[English](https://webpack.js.org)
[Chinease](https://doc.webpack-china.org/)

## 【Babel】
[English](http://babeljs.io/)

## 【ES6】
[Chinease](http://es6.ruanyifeng.com)
[Features](http://es6-features.org)

## 【Fetch】
[fetch](http://github.github.io/fetch/)

## 【react】
[English](https://facebook.github.io/react/)

## 【react-router】
[English](https://reacttraining.com/react-router/)
[Chinease](https://reacttraining.cn/)

## 【react-redux】
[English](http://redux.js.org/)
[Chinease](http://www.redux.org.cn/)

## 【react-flux】
[English](https://github.com/facebook/flux)

## 【datum】
[youcheng](http://www.uprogrammer.cn/)

## 【Nodejs】
[English](https://nodejs.org)
[Chinease](http://nodejs.cn/)

## 【npm】
[English](https://www.npmjs.com)

### 【npm-package】
[react prop-types](https://www.npmjs.com/package/prop-types)

## 【react在线转换成ES6代码】
[react bable](http://babeljs.io/repl/)

## 【react开发】
```javascript
注：ubunut下使用的时候找不到create-react-app时需要做软链
sudo ln -s /var/gaohelong/soft/nodejs/nodejs/bin/create-react-app /usr/local/bin

# 创建项目官方手册.
# https://github.com/facebookincubator/create-react-app

# 创建新项目.
$ npm install -g create-react-app
$ create-react-app hl-react-app

$ cd hl-react-app
$ npm start

# 添加到已有项目.
$ npm install react react-dom --save
$ npm install jsx-loader --save-dev
$ npm install babel-preset-react babel-preset-es2015 --save-dev
$ npm install babel-loader babel-core --save-dev
$ npm install babel-preset-env --save-dev
$ npm install babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy --save-dev
$ npm install babel-preset-react-hmre babel-preset-stage-0 --save-dev
$ npm install prop-types --save
.babelrc
{
    "presets": [
        "react",
        "es2015",
        "stage-0",
    ],
    "plugins": [
        "transform-decorators-legacy",
        "transform-class-properties"
    ]
}

# react-router.
$ npm install react-router --save
$ npm install react-router-dom --save

# redux.
$ npm install redux --save
$ npm install react-redux --save
```
