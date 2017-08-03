import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="hl-main">
                {this.props.title}
            </div>
        );
    }
}

export default withRouter(connect()(Main));
