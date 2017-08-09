import React from 'react';

class PageItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let cls = this.props.page == this.props.cutPage ? "pageItem pageActive" : "pageItem";

        return (
            <div className={cls} onClick={this.props.pageClickHandle}>{this.props.page}</div>
        );
    }
}

export default PageItem;
