import React from 'react';
import { connect } from 'react-redux';

/* component */
// import Header from '../../components/Admin/Layout/Header';

/* action */
import {
    MAIN_DESC, descChange, layoutLoading, layoutMask
} from '../../redux/Actions/Admin';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.descHandle = this.descHandle.bind(this);
    }

    descHandle(e) {
        const { dispatch } = this.props;
        dispatch(descChange());
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(layoutLoading(true));
        dispatch(layoutMask(true));
    }

    componentDidMount() {
        const { dispatch } = this.props;
        setTimeout(
            () => {
                dispatch(layoutLoading(false));
                dispatch(layoutMask(false));
            }
            , 3000
        );
    }

    render() {
        const desc = this.props.MainData.desc == '' ? this.props.title : this.props.MainData.desc;

        return (
            <div>
                <button type="button" onClick={this.descHandle}>click me</button>
                <div>{desc}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        MainData: {
            desc: state.descChange.desc ? state.descChange.desc : ''
        }
    };
};

export default connect(mapStateToProps)(Main);
