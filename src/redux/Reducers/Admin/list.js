import { LIST_LOAD } from '../../Actions/Admin';

const initState = {
    list: [],
    loading: true,
    pageParams: {},
};

export const listState = (state = initState, action = {}) => {
    switch(action.type) {
        case LIST_LOAD:
            return Object.assign({}, state, {
                list: action.data,
                pageParams: action.pageParams,
                loading: false
            });
        default:
            return state;
    }
};
