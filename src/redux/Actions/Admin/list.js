import { axiosPost } from '../../../api/';

export const LIST_LOAD = 'LIST_LOAD';
export const LIST_UNMOUNT = 'LIST_UNMOUNT';

export const listLoad = (dispatch, url, params, callback) => {
    return () => {
        // [fetch].
        // fetch(url)
        //     .then(function(response) {
        //         return response.json();
        //     })
        //     .then(function(json) {
        //         if (json.code === 0) {
        //             dispatch({
        //                 type: LIST_LOAD,
        //                 data: json.list,
        //                 pageParams: {
        //                     cutPage: params.page,
        //                     totalCnt: json.pageParams.totalCnt,
        //                     pageSize: json.pageParams.pageSize
        //                 }
        //             });
        //
        //             if (typeof callback === 'function') {
        //                 callback();
        //             }
        //         }
        //         console.log('parsed json', json);
        //     }).catch(function(ex) {
        //         console.log('parsing failed', ex);
        //     });

        // [axios].
        axiosPost(url, {
            page: params.page
        }).then(function(response) {
            console.log('aysn-action:', response);
            if (response.code === 0) {
                dispatch({
                    type: LIST_LOAD,
                    data: response.list,
                    pageParams: {
                        cutPage: params.page,
                        totalCnt: response.pageParams.totalCnt,
                        pageSize: response.pageParams.pageSize
                    }
                });

                if (typeof callback === 'function') {
                    callback();
                }
            } else {
                console.log('暂无数据');
            }
        }).catch(function(error) {
            console.log(error);
        });
    };
};

export const listUnmount = () => {
    return {
        type: LIST_UNMOUNT
    };
};
