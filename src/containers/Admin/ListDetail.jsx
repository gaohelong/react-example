import React from 'react';
import { connect } from 'react-redux';

/* tools */
import * as Tools from '../../tools/tools';

/* action */
import { listLoad, listUnmount } from '../../redux/Actions/Admin';

class ListDetail extends React.Component {
    componentDidMount() {
        const { dispatch, Config } = this.props;
        Tools.loadCloseTool(dispatch, Config);
    }

    render() {
        const { params } = this.props.match;

        return (
            <div>
                type: {params.type}<br />
                id: {params.id}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps)(ListDetail);
