import {BLOG_LIST_LOAD, BLOG_LIST_ADD, BLOG_LIST_SHOW} from '../../Actions/Blog';

const initState = {
    list:       {},
    loading:    true,
    isFetching: false
};

export const blogList = (state = initState, action = {}) => {
    switch(action.type) {
        case BLOG_LIST_LOAD:
            return Object.assign({}, state, {list: action.data});
        case BLOG_LIST_ADD:
            return state;
        case BLOG_LIST_SHOW:
            return state;
        default:
            return state;
    }
};
