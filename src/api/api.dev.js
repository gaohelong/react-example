/* mock */
import * as mock from '../../mock/admin/';

/* qs */
const qs = require('qs');

/* axios */
import axios from 'axios';

/* axios global */
const AUTH_TOKEN = 'testtoken';
// axios.defaults.baseURL = 'http://localhost:8080'; // 一定要是可访问的路径，如果用的是webpack服务那么真实访问的时候是无法访问的.
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/* post */
export const axiosPost = (url, configObj) => {
    if (typeof (configObj) === 'undefined') {
        configObj = [];
    }

    // configObj['token'] = localStore.get('token');
    configObj['token'] = 'token2017';

    return new Promise(function (resolve, reject) {
        console.log(configObj);
        axios.post(url, qs.stringify({ ...configObj })).then(
            (response) => {
                let resulData = response.data;
                if (resulData.code === 0) { // 成功.
                    // localStore.remove('token');
                    // window.location.href = '/login';
                    console.log('success');
                    resolve(resulData);
                } else { // 失败.
                    console.log('error');
                    resolve(resulData);
                }
            }
        ).catch(
            (error) => {
                reject(error);
            }
        );
    });
};
