import React from 'react';

class ListItems extends React.Component {
    render() {
        console.log('ListItems: render');

        return (
            <div className="list-item">
                {this.props.row.id}-{this.props.row.title}-{this.props.row.date}
            </div>
        );
    }
}

export default ListItems;
