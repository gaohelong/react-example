import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ListItems extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.detailHandle = this.detailHandle.bind(this);
    }

    detailHandle(e, id) {
        // e.stopPropagation();
        // e.preventDefault();
        console.log(e.target, id);
    }

    render() {
        console.log('ListItems: render');
        let url = '/list/news/' + this.props.row.id;

        return (
            <div className="list-item" onClick={(e) => (this.detailHandle(e, this.props.row.id))}>
                <Link to={url}>{this.props.row.id}-{this.props.row.title}-{moment(this.props.row.date).format('YYYY-MM-DD h:mm:ss')}</Link>
            </div>
        );
    }
}

export default ListItems;
