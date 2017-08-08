import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    render() {
        const urls = [
            {url: '/main', title: 'Main'},
            {url: '/echarts', title: 'Echarts'},
            {url: '/list', title: 'List'},
        ];

        const urlsHtml = urls.map((data, i) => {
            let key = 'url_' + i;
            let cls = data.title == this.props.sel ? 'active' : '';
            return <Link to={data.url} key={key} className={cls}>{data.title}</Link>;
        });

        const cls = this.props.sidebar ? "hl-sidebar hl-sidebar-show" : "hl-sidebar";

        return (
            <div className={cls}>{urlsHtml}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sidebar: state.layoutState.sidebar != undefined ? state.layoutState.sidebar : false
    };
};

export default connect(mapStateToProps)(SideBar);
