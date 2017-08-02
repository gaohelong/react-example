import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="hl-login">
                {this.props.title}
            </div>
        );
    }
}

export default Login;
