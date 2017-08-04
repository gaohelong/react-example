import React from 'react';
// import { connect } from 'react-redux';

class Header extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.backHandle = this.backHandle.bind(this);
    }

    backHandle(e) {
        this.props.history.go(-1);
    }

    render() {
        const backText = "<< 返回";

        return (
            <div className="hl-back">
                <a href="javascript:void(0);" onClick={this.backHandle}>{backText}</a>
            </div>
        );
    }
}

// export default connect()(Header);
export default Header;
