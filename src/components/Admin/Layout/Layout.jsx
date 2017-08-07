import React from 'react';
import { connect } from 'react-redux';

/* component */
import Header   from    './Header';
import Sidebar  from    './Sidebar';
import Loading  from    '../Loading/Loading';
import Mask     from    '../Mask/Mask';

/* action */
import { layoutLoading, layoutMask } from '../../../redux/Actions/Admin';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.sel != nextProps.sel) {
            const { dispatch } = this.props;
            dispatch(layoutLoading(true));
            dispatch(layoutMask(true));

        }
    }

    render() {
        // console.log('layout-render:', this.props);

        const cls = this.props.sidebar ? "hl-main hl-main-sidebar" : "hl-main";

        return (
            <div>
                <Header history={this.props.history} />
                <Sidebar sel={this.props.sel} />
                {this.props.loading == true && <Loading />}
                {this.props.mask == true && <Mask />}
                <div className={cls}>
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
        mask: state.layoutState.mask != undefined ? state.layoutState.mask : true,
        sidebar: state.layoutState.sidebar != undefined ? state.layoutState.sidebar: false,
    };
};

export default connect(mapStateToProps)(Layout);
