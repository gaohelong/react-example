import React from 'react';
import { connect } from 'react-redux';

/* action */
import {
    layoutLoading, layoutMask
} from '../../redux/Actions/Admin';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch, Config } = this.props;
        setTimeout(
            () => {
                dispatch(layoutLoading(false));
                dispatch(layoutMask(false));
            }
            , Config.loading.time
        );
    }

    render() {
        return (
            <div>list</div>        
        );
    }
}

const mapStateToProps = (state) => {
    return {

    };
};

export default connect(mapStateToProps)(List);
