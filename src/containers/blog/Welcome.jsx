import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="hl-welcome">
                {this.props.title}
            </div>
        );
    }
}

export default Welcome;
