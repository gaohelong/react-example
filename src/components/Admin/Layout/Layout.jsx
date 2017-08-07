import React from 'react';
import { connect } from 'react-redux';

/* component */
import Header   from    './Header';
import Sidebar  from    './Sidebar';
import Loading  from    '../Loading/Loading';
import Mask     from    '../Mask/Mask';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log('layout-render:', this.props);
        return (
            <div>
                <Header history={this.props.history} />
                <Sidebar sel={this.props.sel} />
                {this.props.loading == true && <Loading />}
                {this.props.mask == true && <Mask />}
                <div className="hl-main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('layoutSTP:', state);
    return {
        loading: state.layoutState.loading != undefined ? state.layoutState.loading : true,
        mask: state.layoutState.mask != undefined ? state.layoutState.mask : true
    };
};

export default connect(mapStateToProps)(Layout);
