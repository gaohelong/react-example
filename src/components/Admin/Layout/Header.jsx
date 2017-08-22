import React from 'react';
import { connect } from 'react-redux';

/* action */
import { layoutSidebar } from '../../../redux/Actions/Admin';

class Header extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.backHandle = this.backHandle.bind(this);
        this.sidebarHandle = this.sidebarHandle.bind(this);
    }

    backHandle(e) {
        e.preventDefault();
        this.props.history.go(-1);
    }

    sidebarHandle(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(layoutSidebar(!this.props.sidebar));
    }

    render() {
        const backText = '<< Back';

        return (
            <div className="hl-back">
                <a href="#" onClick={this.backHandle}>{backText}</a>
                <a href="#" className="hl-f-r hl-mgn-r-20" onClick={this.sidebarHandle}>sidebar</a>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.layoutState.sidebar !== undefined ? state.layoutState.sidebar : false
    };
};

export default connect(mapStateToProps)(Header);
// export default Header;
