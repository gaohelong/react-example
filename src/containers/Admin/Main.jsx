import React from 'react';
import { connect } from 'react-redux';

/* component */
// import Header from '../../components/Admin/Layout/Header';

/* tools */
import { loadCloseTool } from '../../tools/tools';

/* action */
import {
    MAIN_DESC, descChange
} from '../../redux/Actions/Admin';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.descHandle = this.descHandle.bind(this);

        console.log('main->constructor');
    }

    descHandle(e) {
        const { dispatch } = this.props;
        dispatch(descChange());
    }

    componentDidMount() {
        const { dispatch, Config } = this.props;
        loadCloseTool(dispatch, Config);
        console.log('main->compoentDidMount');
    }

    render() {
        console.log('main->render');
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
