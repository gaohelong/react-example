import {LOGIN_LOGIN} from '../../Actions/Admin';

const initState = {

};

export const login = (state = initState, action = {}) => {
    switch(action.type) {
        case LOGIN_LOGIN:
            return Object.assign({}, state, {loginState: true});
        default:
            return state;
    }
};
