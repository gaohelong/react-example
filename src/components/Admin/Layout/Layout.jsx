import React from 'react';

/* component */
import Header   from  './Header';
import Sidebar  from  './Sidebar';

class Layout extends React.Component {
    render() {
        return (
            <div>
                <Header history={this.props.history} />
                <Sidebar sel={this.props.sel} />
                <div className="hl-main">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;
