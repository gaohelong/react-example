import { axiosPost } from '../../../api/';
// import axios from 'axios';
// import * as mock from '../../../../mock/admin/';

export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_FILTERS = {
    USER_INFO: 'USER_INFO',
    TOKEN: 'TOKEN'
};

export const loginFetch = (dispatch, data) => {
    return () => {
        // [fetch json].
        // fetch(data.url)
        //     .then(function(response) {
        //         return response.json();
        //     }).then(function(json) {
        //         if (json.code === 0) { // 登录成功.
        //             dispatch({
        //                 type: LOGIN,
        //                 data: {
        //                     token: json.token,
        //                     userinfo: json.userinfo
        //                 }
        //             });
        //         } else { // 登录失败.
        //             dispatch();
        //         }
        //     }).catch(function(ex) {
        //         // console.log('parsing failed', ex);
        //         dispatch();
        //     });

        // [fetch post]
        // post params: php $_POST.
        let formData = new FormData();
        formData.append('user', data.data.user);
        formData.append('pwd', data.data.pwd);

        fetch('http://hl.react.com/api/user.php', {
            method: 'POST',
            // body: JSON.stringify(data.data),
            body: formData,
            mode: 'cors', // 跨域.
            // headers: {
            // 'Content-Type': 'application/x-www-form-urlencoded',
            // 'Accept': 'application/json',
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type': 'text/plain'
            // },
            credentials: 'same-origin'
        }).then(function(response) {
            // console.log(response.text());
            // console.log(response.json());
            return response.json();
        }).then(function(json) {
            console.log(json);
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

        // [fetch get]
        // get params: php $_GET.
        // fetch('http://localhost:8081/login?id=1&type=2', {
        // fetch('http://hl.react.com/api/user.php?id=1&type=2', {
        // fetch(data.url, {
        //     method: 'get'
        //     // mode: 'no-cors'
        // }).then(function(response) {
        //     console.log(response);
        //     return response.json();
        // }).then(function(json) {
        //     if (json.code === 0) { // 登录成功.
        //         dispatch({
        //             type: LOGIN,
        //             data: {
        //                 token: json.token,
        //                 userinfo: json.userinfo
        //             }
        //         });
        //     } else { // 登录失败.
        //         // dispatch();
        //     }
        // }).catch(function(ex) {
        //     console.log('parsing failed', ex);
        //     // dispatch();
        // });

        // [axios].
        // axiosPost(data.url, {
        //     user: data.data.user,
        //     pwd: data.data.pwd
        // }).then(function (response) {
        //     console.log(response);
        //     if (response.code === 0) { // 登录成功.
        //         dispatch({
        //             type: LOGIN,
        //             data: {
        //                 token: response.token,
        //                 userinfo: response.userinfo
        //             }
        //         });
        //     } else { // 登录失败.
        //         console.log('登录失败');
        //     }
        // }).catch(function (error) {
        //     console.log(error);
        // });
    };
};
