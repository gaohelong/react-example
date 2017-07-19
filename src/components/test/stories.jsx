import React from 'react';

// let PhotoStory = (props) => {
//     return <div>{props.story}</div>;
// };
class PhotoStory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>PhotoStory - {this.props.story}</div>
    }
}

// let VideoStory = () => {
//     return <div>VideoStory</div>;
// };
class VideoStory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>VideoStory - {this.props.story}</div>
    }
}

export {PhotoStory, VideoStory}
