import React from 'react';

class F404 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div className="hl-404">
                你访问的: {this.props.location.pathname} 不存在！
            </div>
        );
    }
}

export default F404;
