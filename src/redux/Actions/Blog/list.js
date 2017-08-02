export const BLOG_LIST_LOAD = 'BLOG_LIST_LOAD';
export const BLOG_LIST_ADD  = 'BLOG_LIST_ADD';
export const BLOG_LIST_SHOW = 'BLOG_LIST_SHOW';

export const blogListLoad = (dispatch, url) => {
    // return {
    //     type: BLOG_LIST_LOAD,
    //     url:  url
    // };
    
    return () => {
        fetch(url)
            .then(function(response) {
                return response.json();
            }).then(function(json) {
                if (json.code == 0) {
                    dispatch({
                        type: BLOG_LIST_LOAD,
                        data: json.list
                    });
                }
                console.log('parsed json', json);
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    };
};

export const blogListAdd = (data) => {
    return {
        type: BLOG_LIST_ADD,
        data: data
    };
};

export const blogListShow = (id) => {
    return {
        type: BLOG_LIST_SHOW,
        id:   id
    };
};
