import React from 'react';
import { connect } from 'react-redux';

/* action */
import {LOGIN_FILTERS, loginFetch} from '../../redux/Actions/Admin/';

class Login extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.loginHandle = this.loginHandle.bind(this);
    }

    loginHandle(e) {
        const { dispatch } = this.props;

        dispatch(loginFetch(dispatch, {
            url:    '/api/admin/login.json',
            data: {
                user:   this.userInputEle.value,
                pwd:    this.pwdInputEle.value
            }
        }));
    }

    componentWillReceiveProps(nextProps) {
        const { history } = this.props;

        // console.log(nextProps, this.props);
        if (nextProps.token) {
            history.push('/main');
        }
    }

    render() {
        const { dispatch } = this.props;

        return(
            <div className="hl-login">
                <div className="hl-clearfix">
                   <span>Username:</span>
                   <input type="text" id="user" ref={input => this.userInputEle = input} placeholder="Username" />
                </div>
                <div className="hl-clearfix hl-mgn-t-10">
                    <span>Password:</span>
                    <input type="password" id="pwd" ref={input => this.pwdInputEle = input} placeholder="Password" />
                </div>
                <button type="button" className="hl-btn" onClick={this.loginHandle}>Login</button>
            </div>
        );
    }
}

const selectTodos = (todos, filter) => {
    switch(filter) {
        case LOGIN_FILTERS.USER_INFO:
            return todos.userinfo
        case LOGIN_FILTERS.TOKEN:
            return todos.token
    }
}

const mapStateToProps = (state) => {
    return {
        token:      selectTodos(state.loginState, LOGIN_FILTERS.TOKEN),
        userinfo:   selectTodos(state.loginState, LOGIN_FILTERS.USER_INFO)
    };
}

const View = connect(mapStateToProps)(Login);
export default View;
