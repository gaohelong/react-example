import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {
    constructor(props) {
        super(props);

        // func.
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <input type='text' ref={(input) => this.addInput = input} />
                <button onClick={this.handleClick}>Add</button>
            </div>
        );
    }

    handleClick() {
        const text = this.addInput.value.trim();
        this.props.onAddClick(text);
        this.addInput.value = '';
    }
}

Add.propTypes = {
    onAddClick: PropTypes.func.isRequired
}

export default Add;
