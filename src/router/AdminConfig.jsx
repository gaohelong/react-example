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
import loadListDetail from 'bundle-loader?lazy!../containers/Admin/ListDetail';
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

const ListDetail = (props) => {
    require('../sass/modules/admin/listDetail');
    document.title = 'admin-list-detail';

    return (
        <Bundle load={loadListDetail}>
            {
                (ListDetail) => {
                    return (
                        <ListDetail {...props} Config={Config} />
                    );
                }
            }
        </Bundle>
    );
};

// const routerConfig = [
//     {
//         exact: true,
//         path: '/',
//         component: Login
//     },
//     {
//         path: '/main',
//         render: (props) => (
//             <Layout {...props} sel="Main">
//                 <Main {...props} />
//             </Layout>
//         )
//     },
//     {
//         path: '/echarts',
//         render: (props) => (
//             <Layout {...props} sel="Echarts">
//                 <Echarts {...props} />
//             </Layout>
//         )
//     },
//     {
//         path: '/list',
//         render: (props) => (
//             <Layout {...props} sel="List">
//                 <List {...props} />
//             </Layout>
//         )
//     },
//     {
//         component: F404
//     }
// ];
// 
// const RouteCreate = (route) => (
//     <Route path={route.path} exact={route.exact} component={route.component} render={route.render} />
// );

const routerConfig = [
    {
        exact: true,
        path: '/',
        component: Login
    },
    {
        path: '/main',
        sel: 'Main',
        component: Main
    },
    {
        path: '/echarts',
        sel: 'Echarts',
        component: Echarts
    },
    {
        exact: true,
        path: '/list',
        sel: 'List',
        component: List
    },
    {
        path: '/list/:type/:id',
        sel: 'List',
        component: ListDetail
    },
    {
        component: F404
    }
];

const RouteCreate = (route) => {
    if (route.path === '/' || route.path === undefined) {
        return <Route path={route.path} exact={route.exact} component={route.component} />;
    } else {
        return (
            <Route path={route.path} exact={route.exact} render={(props) => (
                <Layout {...props} sel={route.sel}>
                    <route.component {...props} />
                </Layout>
            )} />
        );
    }
};

class Admin extends React.Component {
    render() {
        // 开发的功能是切换url后局部变动, 但是给RouteCreate加上key={i}则会整体重新加载; 给固定值则不整体重新加载, 例如：key="url"则局部加载.
        return (
            <Router>
                <Switch>
                    {
                        routerConfig.map((route, i) => (
                            <RouteCreate key="url" {...route} />
                        ))
                    }
                </Switch>
            </Router>
        );
    }
}

export default Admin;
