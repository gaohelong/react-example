import { LAYOUT_MASK, LAYOUT_LOADING, LAYOUT_SIDEBAR, LAYOUT_CONTENTTOGGLE } from '../../Actions/Admin/';

const initState = {
    loading:        true,
    mask:           true,
    sidebar:        false,
    contentToggle:  false,
};

export const layoutState = (state = initState, action = {}) => {
    switch(action.type) {
        case LAYOUT_MASK:
            return Object.assign({}, state, {loading: action.data.mask});
        case LAYOUT_LOADING:
            return Object.assign({}, state, {mask: action.data.loading});
        case LAYOUT_SIDEBAR:
            return Object.assign({}, state, {sidebar: action.data.sidebar});
        case LAYOUT_CONTENTTOGGLE:
            return Object.assign({}, state, {contentToggle: !state.contentToggle});
        default:
            return state;
    }
};
