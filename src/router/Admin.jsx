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

import Config from '../config/config';

/* Bundle */
import Bundle from './Bundle';

/* lazy container */
import loadLogin from 'bundle-loader?lazy!../containers/Admin/Login';
import loadMain from 'bundle-loader?lazy!../containers/Admin/Main';
import loadEcharts from 'bundle-loader?lazy!../containers/Admin/Echarts';
import loadList from 'bundle-loader?lazy!../containers/Admin/List';
import loadF404 from 'bundle-loader?lazy!../containers/F404';

/* layout */
import Layout from '../components/Admin/Layout/Layout';

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

    let title = 'admin main';
    return (
        <Bundle load={loadMain}>
            {
                (Main) => {
                    return (
                        <Main {...props} title={title} Config={Config} />
                    );
                }
            }
        </Bundle>
    );
};

const Echarts = (props) => {
    require('../sass/modules/admin/echarts');
    document.title = 'admin-echarts';

    return (
        <Bundle load={loadEcharts}>
            {
                (Echarts) => {
                    return (
                        <Echarts {...props} Config={Config} />
                    );
                }
            }
        </Bundle>
    );
};

const List = (props) => {
    console.log('list-component');
    require('../sass/modules/admin/list');
    document.title = 'admin-list';

    return (
        <Bundle load={loadList}>
            {
                (List) => {
                    return (
                        <List {...props} Config={Config} />
                    );
                }
            }
        </Bundle>
    );
};

/* component */
class Admin extends React.Component {
    render() {
        // 注意Route匹配url的前后顺序.
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/main" render={(props) => (
                        <Layout {...props} sel="Main">
                            <Main {...props} />
                        </Layout>
                    )} />
                    <Route path="/echarts" render={(props) => (
                        <Layout {...props} sel="Echarts">
                            <Echarts {...props} />
                        </Layout>
                    )} />
                    <Route path="/list" render={(props) => (
                        <Layout {...props} sel="List">
                            <List {...props} />
                        </Layout>
                    )} />
                    <Route component={F404} />
                </Switch>
            </Router>
        );
    }
}

export default Admin;
