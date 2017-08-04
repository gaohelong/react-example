import React from 'react';
import { connect } from 'react-redux';

/* component */
import Header from '../../components/Admin/Layout/Header';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <div className="hl-main">
                    {this.props.title}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(Main);
