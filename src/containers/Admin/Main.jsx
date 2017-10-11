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

/* image */
import bossImg from '../../assets/images/global/boss_22x22.png';

class Main extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.descHandle = this.descHandle.bind(this);
        this.testAsync = this.testAsync.bind(this);
        console.log('main->constructor');
    }

    testAsync() {
        /* 实例1 */
        // async function timeout(ms) {
        //     await new Promise((resolve) => {
        //         setTimeout(resolve, ms);
        //     });
        // }
        //
        // async function asyncPrint(value, ms) {
        //     await timeout(ms);
        //     console.log(value);
        // }
        //
        // asyncPrint('------ hello world ------', 3000);

        /* 实例2: sync函数内部return语句返回的值，会成为then方法回调函数的参数. */
        async function f() {
            return '--- hello world ---';
        }

        f().then(v => console.log(v));
    }

    descHandle(e) {
        const { dispatch } = this.props;
        dispatch(descChange());
    }

    componentDidMount() {
        const { dispatch, Config } = this.props;
        loadCloseTool(dispatch, Config);

        this.testAsync();
        console.log('main->compoentDidMount');
    }

    render() {
        console.log('main->render');
        const desc = this.props.MainData.desc === '' ? this.props.title : this.props.MainData.desc;

        return (
            <div>
                <img src={bossImg} style={{width: '200px', height: '200px'}} />
                <img src={require('../../assets/images/global/boss_blue_22x22.svg')} style={{width: '200px', height: '200px'}} />
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
