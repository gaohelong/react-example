import React from 'react';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let row = this.props.resRow;
        let url = "#/detail/" + row.id;

        return (
            <dl className="hl-mgn-b-10">
                <dt>{row.id}、{row.title}</dt>
                <dt className="other">
                    <span className="hl-mgn-r-40">浏览:{row.lookCnt}次</span>
                    <span className="hl-mgn-r-40">{row.time}</span>
                    <a href={url} className="hl-f-r">查看</a>
                </dt>
            </dl>
        );

    }
}

export default ListItem;
