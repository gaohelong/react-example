import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="hl-list">
                <ul>
                    <li>1、react的新特性!</li>
                </ul>
            </div>
        );
    }
}

export default List;
