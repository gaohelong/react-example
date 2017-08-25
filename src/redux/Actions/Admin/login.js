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
        // [fetch].
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
        //     })

        // [axios].
        axiosPost(data.url, {
            user: data.data.user,
            pwd: data.data.pwd
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    };
};
