export const LIST_LOAD = 'LIST_LOAD';

export const listLoad = (dispatch, url, params) => {
    return () => {
        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                if (json.code == 0) {
                    dispatch({
                        type: LIST_LOAD,
                        data: json.list,
                        pageParams: {
                            cutPage: params.page,
                            totalCnt: json.pageParams.totalCnt,
                            pageSize: json.pageParams.pageSize
                        }
                    });
                }
                console.log('parsed json', json);
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    }
}
