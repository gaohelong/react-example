/* react */
import React from 'react';

/* react-router */
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';
// let Router = process.env.NODE_ENV == 'production' ? BrowserRouter : HashRouter;
let Router = BrowserRouter;

/* Bundle */
import Bundle from './Bundle';

/* lazy container */
import loadLogin    from 'bundle-loader?lazy!../containers/Admin/Login';
import loadMain     from 'bundle-loader?lazy!../containers/Admin/Main';
import loadF404     from 'bundle-loader?lazy!../containers/F404';

/* autoload module */
const F404 = (props) => {
    document.title = 'blog-404';

    return (
        <Bundle load={loadF404}>
            {(F404) => <F404 {...props} />}
        </Bundle>
    );
};

const Login = (props) => {
    require('../sass/modules/admin/index');
    document.title = 'admin-login';

    let title = 'react admin example!';
    return (
        <Bundle load={loadLogin}>
            {(Login) => <Login {...props} title={title} />}
        </Bundle>
    );
};

const Main = (props) => {
    require('../sass/modules/admin/main');
    document.title = 'admin-main';

    return (
        <Bundle load={loadMain}>
            {(Main) => <Main {...props} />}
        </Bundle>
    );
};

/* component */
class Admin extends React.Component {
    render() {
        // 注意Route匹配url的前后顺序.
        return (
            <Router>
                <div>
                    <div className="hl-container">
                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/main" component={Main} />
                            <Route component={F404}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Admin;
