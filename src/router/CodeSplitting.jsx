import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
let Router = process.env.NODE_ENV == 'production' ? BrowserRouter : HashRouter;

/* Bundle */
import Bundle from './Bundle';

/* lazy */
import loadHeader from 'bundle-loader?lazy!../components/layout/Header';
import loadFooter from 'bundle-loader?lazy!../components/layout/Footer';

/* 首次访问组件加载它们的模块(自动加载) */
const Header = (props) => {
    /* sass */
    require('../sass/modules/layout/layout');

    /* component */
    return (
        <Bundle load={loadHeader}>
            {(Header) => <Header {...props}/>}
        </Bundle>
    );
};

const Footer = (props) => {
    /* sass */
    require('../sass/modules/layout/layout');

    /* component */
    return (
        <Bundle load={loadFooter}>
            {(Footer) => <Footer {...props}/>}
        </Bundle>
    );
};

class CodeSplitting extends React.Component {
    componentDidMount() {
        // 手动加载.
        // loadHeader(() => {});
        // loadFooter(() => {});
    };

    render() {
        return (
            <Router>
                <div>
                    <h1>Welcome!</h1>
                    <div><Link to="/header">header</Link></div>
                    <div><Link to="/footer">footer</Link></div>
                    <Route path="/header" component={Header}/>
                    <Route path="/footer" component={Footer}/>
                </div>
            </Router>
        );
    }
}

export default CodeSplitting;
