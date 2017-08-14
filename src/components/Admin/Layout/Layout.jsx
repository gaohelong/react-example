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

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(layoutLoading(true));
        dispatch(layoutMask(true));
    }

    componentWillReceiveProps(nextProps) {
        // console.log(this.props.sel, nextProps.sel);
        if (this.props.sel != nextProps.sel) {
            const { dispatch } = this.props;
            dispatch(layoutLoading(true));
            dispatch(layoutMask(true));
        }
        console.log('ReceiveProps');
    }

    render() {
        console.log('layout-render:');
        let cls = this.props.sidebar ? "hl-main hl-main-sidebar" : "hl-main";
        let style = this.props.loading ? {overflow: 'hidden', opacity: 0} : {};
        let fadeCls = this.props.contentToggle ? 'fade-enter' : 'fade-exit';
        
        return (
            <div>
                <Header history={this.props.history} />
                <Sidebar sel={this.props.sel} />
                {this.props.loading == true && <Loading />}
                {this.props.mask == true && <Mask />}
                <div className={cls} id="hl-main" style={style}>
                    <div className={fadeCls}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('layoutSTP:', state);
    return {
        loading: state.layoutState.loading,
        mask: state.layoutState.mask,
        sidebar: state.layoutState.sidebar,
        // contentToggle: state.layoutState.contentToggle != undefined ? state.layoutState.contentToggle : false
        contentToggle: state.layoutState.contentToggle
    };
};

export default connect(mapStateToProps)(Layout);
