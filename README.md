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
[Chinese](http://www.ruanyifeng.com/blog/javascript/)

## 【webpack】
[English](https://webpack.js.org)
[Chinese](https://doc.webpack-china.org/)

## 【Babel】
[English](http://babeljs.io/)

## 【ES6】
[Chinese](http://es6.ruanyifeng.com)
[Features](http://es6-features.org)

## 【Fetch】
[fetch](http://github.github.io/fetch/)

## 【Eslint】
[English](https://eslint.org)
[Chinese](http://eslint.cn/)

## 【Ant-Design】
[PC](https://ant.design)
[Mobile](https://mobile.ant.design)

## 【mock管理工具】
[eolinker](https://www.eolinker.com)

## 【PlugIn】
### 【Drag: React dnd】
[GitHub](https://github.com/react-dnd/react-dnd)
[English](http://react-dnd.github.io/react-dnd/)

### 【Drag: React draggable】
[GitHub](https://github.com/mzabriskie/react-draggable)

### 【Datepick: momentJs】
[Chinese](http://momentjs.cn/)

### 【CodeEditor: codemirror】
[GitHub](https://github.com/JedWatson/react-codemirror)

### 【Rich text editor: quill】
[GitHub](https://github.com/zenoamaro/react-quill)
[English](https://quilljs.com/)
[Example](https://zenoamaro.github.io/react-quill/)

### 【Rich text editor: React Draft Wysiwyg】
[GitHub](https://github.com/jpuri/react-draft-wysiwyg)
[English](https://jpuri.github.io/react-draft-wysiwyg)

### 【Rich text editor: React lz editor】
[GitHub](https://github.com/leejaen/react-lz-editor)
[Example](https://leejaen.github.io/react-lz-editor/index.html)

### 【ColorSelect: React color】
[GitHub](https://github.com/casesandberg/react-color)
[English](http://casesandberg.github.io/react-color/)

### 【Clipboard: react copy to clipboard】
[GitHub](https://github.com/nkbt/react-copy-to-clipboard)

### 【QR Code: qrcode.react】
[GitHub](https://github.com/zpao/qrcode.react)
[Example](http://zpao.github.io/qrcode.react/)

### 【Charts: Recharts】
[GitHub](https://github.com/recharts/recharts/)
[Chinese](http://recharts.org/#/zh-CN/)

### 【Charts: Victory】
[GitHub](https://github.com/FormidableLabs/victory)
[English](http://formidable.com/open-source/victory/)

### 【Nprogress: Nprogress】
[GitHub](https://github.com/rstacruz/nprogress)
[English](http://ricostacruz.com/nprogress/)

### 【Internationalization: React Intl】
[GitHub](https://github.com/yahoo/react-intl)

### 【Syntaxv Highlighter: react syntax highlighter】
[GitHub](https://github.com/conorhastings/react-syntax-highlighter)

### 【Mactdown: react markdown】
[GitHub](https://github.com/rexxars/react-markdown)

### 【Infinite scroll: react virtualized】
[GitHub](https://github.com/bvaughn/react-virtualized)

## 【react】
[English](https://facebook.github.io/react/)
[China-url-1](https://doc.react-china.org/)
[China-url-2](http://wiki.jikexueyuan.com/project/react/)
[China-url-3](https://discountry.github.io/react/)

## 【react-router】
[English](https://reacttraining.com/react-router/)
[Chinese](https://reacttraining.cn/)

## 【react-redux】
[English](http://redux.js.org/)
[Chinese](http://www.redux.org.cn/)

## 【react-flux】
[English](https://github.com/facebook/flux)

## 【datum】
[youcheng](http://www.uprogrammer.cn/)

## 【Nodejs】
[English](https://nodejs.org)
[Chinese](http://nodejs.cn/)

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

    location ~  .*/mock/(.*)
    {
        rewrite .*/mock/(.*)  /mock/$1 break;
        root /var/gaohelong/www/hl-react/;
    }

    location ~ .*/images/(.*)
    {
        rewrite .*/images/(.*) /images/$1 break;
        root /var/gaohelong/www/hl-react/dist/assets/;
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
