import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="hl-main">
                {this.props.title}
            </div>
        );
    }
}

export default Main;
