<?php
// header("Access-Control-Allow-Origin: *"); // 支持fetch cors请求，不限制请求来源.
header("Access-Control-Allow-Origin: http://localhost:8080"); // 支持fetch cors请求，并且限制请求来源为http://localhost:8080.
header("Access-Control-Allow-Credentials: true"); // 支持fetch请求时请求允许发送cookies.

$_SESSION['reactTest'] = 'sessionTest2017';

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
