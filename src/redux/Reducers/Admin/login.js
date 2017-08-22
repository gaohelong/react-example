import {LOGIN} from '../../Actions/Admin/';

const initState = {
    token: '',
    userinfo: {}
};

export const loginState = (state = initState, action = {}) => {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                userinfo: action.data.userinfo,
                token: action.data.token
            });
        default:
            return state;
    }
};
