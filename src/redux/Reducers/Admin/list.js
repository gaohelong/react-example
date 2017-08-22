import { LIST_LOAD, LIST_UNMOUNT } from '../../Actions/Admin';

const initState = {
    list: [],
    loading: true,
    pageParams: {}
};

export const listState = (state = initState, action = {}) => {
    switch (action.type) {
        case LIST_LOAD:
            return Object.assign({}, state, {
                list: action.data,
                pageParams: action.pageParams,
                loading: false
            });
        case LIST_UNMOUNT:
            return Object.assign({}, state, {
                list: []
            });
        default:
            return state;
    }
};
