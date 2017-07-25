import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

let Router = process.env.NODE_ENV == 'production' ? BrowserRouter : HashRouter;

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
            <hr/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Topics = ({match}) => {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>
                        Rendering with React
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>
                        Components
                    </Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <Route path={`${match.url}/:topicId`} component={Topic}/>
            <Route exact path={match.url} render={() => (
                <h3>Please select a topic.</h3>
            )}/>
        </div>
    );
};

const Topic = (obj) => {
    let {match} = obj;
    
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
};

export default BasicExample;
