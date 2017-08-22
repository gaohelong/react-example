import React from 'react';
import { connect } from 'react-redux';

/* tools */
// import { loadCloseTool, loadOpenTool } from '../../tools/tools';
import * as Tools from '../../tools/tools';

/* action */
import { listLoad, listUnmount } from '../../redux/Actions/Admin';

/* component */
import ListItems from '../../components/Admin/List/ListItems';
import PageS1 from '../../components/Admin/Page/PageStyleOne';

/* immutable */
import { Map as imMap, is, fromJS } from 'immutable';

class List extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.pageClickHandle = this.pageClickHandle.bind(this);
    }

    pageClickHandle(e) {
        const { dispatch, Config } = this.props;
        Tools.loadOpenTool(dispatch);
        dispatch(listLoad(dispatch, '/api/admin/list.json', { page: e.target.innerHTML }, () => {
            Tools.loadCloseTool(dispatch, Config);
        }));
        // Tools.contentToggle(dispatch);
    }

    componentDidMount() {
        const { dispatch, Config } = this.props;
        dispatch(listLoad(dispatch, '/api/admin/list.json', { page: 1 }, () => {
            Tools.loadCloseTool(dispatch, Config);
        }));
    }

    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(listUnmount());
    }

    render() {
        console.log('List: render');
        const { dispatch, Config } = this.props;

        /* list */
        let listHtml = '';
        if (this.props.list.length > 0) {
            let { pageSize, cutPage } = this.props.pageParams;
            let list = this.props.list.slice((cutPage - 1) * pageSize, cutPage * pageSize);
            listHtml = list.map((row) => {
                let key = 'list_' + row.id;
                return <ListItems key={key} row={row} />;
            });
        }

        return (
            <div>
                <div className="hl-list">{listHtml}</div>
                { is(imMap(this.props.pageParams), imMap({})) === false && <PageS1 pageParams={this.props.pageParams} pageClickHandle={this.pageClickHandle} /> }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log('state:', state);
    return {
        loading: state.listState.loading,
        list: state.listState.list,
        pageParams: state.listState.pageParams
    };
};

export default connect(mapStateToProps)(List);
