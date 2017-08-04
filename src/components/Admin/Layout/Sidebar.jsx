import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    render() {
        const urls = [
            {url: '/main', title: 'Main'},
            {url: '/echarts', title: 'Echarts'},
        ];

        const urlsHtml = urls.map((data, i) => {
            let key = 'url_' + i;
            let cls = data.title == this.props.sel ? 'active' : '';
            return <Link to={data.url} key={key} className={cls}>{data.title}</Link>;
        });

        return (
            <div className="hl-sidebar">{urlsHtml}</div>
        );
    }
}

export default SideBar;
