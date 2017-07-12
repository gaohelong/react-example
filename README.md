## 【ruanyifeng】
[Chinease](http://www.ruanyifeng.com/blog/javascript/)

## 【webpack】
[Englisn](https://webpack.js.org)
[Chinease](https://doc.webpack-china.org/)

## 【Babel】
[English](http://babeljs.io/)

## 【ES6】
[Chinease](http://es6.ruanyifeng.com)

## 【react】
[English](https://facebook.github.io/react/)

## 【react-router】
[English](https://reacttraining.com/react-router/)
[Chinease](http://www.uprogrammer.cn/react-router-cn/)

## 【react-redux】
[English](http://redux.js.org/)
[Chinease](http://www.redux.org.cn/)

## 【react-flux】
[English](https://github.com/facebook/flux)

## 【Nodejs】
[English](https://nodejs.org)
[Chinease](http://nodejs.cn/)

## 【npm】
[English](https://www.npmjs.com)

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

```
