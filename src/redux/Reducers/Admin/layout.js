import { LAYOUT_MASK, LAYOUT_LOADING } from '../../Actions/Admin/';

const initState = {
    loading:    true,
    mask:       true,
};

export const layoutState = (state = initState, action = {}) => {
    switch(action.type) {
        case LAYOUT_MASK:
            return Object.assign({}, state, {loading: action.data.mask});
        case LAYOUT_LOADING:
            return Object.assign({}, state, {mask: action.data.loading});
        default:
            return state;
    }
};
