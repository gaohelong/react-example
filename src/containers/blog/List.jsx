import React from 'react';
import {connect} from 'react-redux';
import {blogListLoad, BLOG_LIST_LOAD} from '../../redux/Actions/index';
import ListItem from '../../components/blog/ListItem';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // 通过调用 connect() 注入:
        const {dispatch} = this.props;
        dispatch(blogListLoad(dispatch, './api/blog/list.json'));
    }

    render() {
        // console.log('props:', this.props);
        let list = '';
        if (this.props.list.length) {
            list = this.props.list.map((resRow) => {
                let key = 'list_' + resRow.id;
                return <ListItem resRow={resRow} key={key} />
            });
        }

        return (
            <div className="hl-list">{list}</div>
        );
    }
}

const selectTodos = (todos, filter) => {
    switch (filter) {
        case BLOG_LIST_LOAD:
            return todos.list;
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/reactjs/reselect 效果更佳。
const mapStateToProps = (state, ownProps = {}) => {
    return {
        list: selectTodos(state.blogList, BLOG_LIST_LOAD)
    };
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(mapStateToProps)(List) 中；
export default connect(mapStateToProps)(List);
