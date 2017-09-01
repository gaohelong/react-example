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

## 【Eslint】
[English](https://eslint.org)
[Chinease](http://eslint.cn/)

## 【Moment】
[Chinease](http://momentjs.cn/)

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

## 【css To reactJs】
[css to reactJs](https://transform.now.sh/css-to-js)

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
$ npm install react-router-redux --save

# nginx: router url rewrite.
server
{
    listen 80;
    #listen [::]:80 default_server ipv6only=on;
    server_name hl.react.com;
    index index.html index.htm index.php;
    root  /var/gaohelong/www/hl-react/dist/;

    #error_page   404   /404.html;
    include enable-php-pathinfo.conf;
    #rewrite ^(.*)$ /index.php last;

    location /nginx_status {
        stub_status on;
        access_log   on;
        deny all;
    }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires 30d;
    }

    # react-router: nginx rewrite.
    location ~  .*/assets/js/(.*)\.js
    {
        rewrite .*/assets/(.*)  /assets/$1 break;
        root /var/gaohelong/www/hl-react/dist/;
    }

    location ~ .*\.(js|css)?$
    {
        expires 1h;
    }

    # 指定api接口: nginx rewrite.
    location ~  .*/api/(.*)\.js
    {
         rewrite .*/api/(.*)  /api/$1 break;
         root /var/gaohelong/www/hl-react/dist/;
    }

    location /
    {
        # 指定所有url访问: nginx rewirte.
        rewrite (.*) /index.html break;
        root /var/gaohelong/www/hl-react/dist/;
        index index.html index.htm index.php;

        # if (!-e $request_filename) {
        #     rewrite ^/(.*)$ /index.php/$1 last;
        #     break;
        # }
    }


    error_log   /var/logs/hl-react/error.log;
    access_log  /var/logs/hl-react/access.log;
}
```

## 【json-server】
```javascript
注: 当前项目用fetch时使用json-server服务.

# 启动json-server.
$ json-server --watch api/user.js --port 8081

# 使用route.
$ json-server --w api/test/test.js --r api/test/routes.json --p 8081
```

## 【fetch cors】
```javascript
[js]
// post params: php $_POST.
let formData = new FormData();
formData.append('user', data.data.user);
formData.append('pwd', data.data.pwd);

fetch('http://hl.react.com/api/user.php', {
    method: 'POST',
    body: formData,
    mode: 'cors', // 跨域.
    credential: 'same-origin'
}).then(function(response) {
    return response.json();
}).then(function(json) {
    if (json.code === 0) { // 登录成功.
        dispatch({
            type: LOGIN,
            data: {
                token: json.token,
                userinfo: json.userinfo
            }
        });
    } else { // 登录失败.
        // dispatch();
    }
}).catch(function(ex) {
    console.log('parsing failed', ex);
    // dispatch();
});

[php-api]
// header("Access-Control-Allow-Origin: *"); // 支持fetch cors请求，不限制请求来源.
header("Access-Control-Allow-Origin: http://localhost:8080"); // 支持fetch cors请求，并且限制请求来源为http://localhost:8080.

// var_dump($_POST);
// var_dump($_GET);
$res = array(
    'code' => 0,
    'token' => 'test2017',
    'userinfo' => array(
        'name' => 'MsLeannon',
        'age' => 20
    )
);

echo json_encode($res);
```
