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
let Router = process.env.NODE_ENV == 'production' ? BrowserRouter : HashRouter;

/* Bundle */
import Bundle from './Bundle';

/* lazy container */
import loadWelcome  from 'bundle-loader?lazy!../containers/blog/Welcome';
import loadList     from 'bundle-loader?lazy!../containers/blog/List';
import loadAdd      from 'bundle-loader?lazy!../containers/blog/Add';
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

const Welcome = (props) => {
    require('../sass/modules/blog/welcome');
    document.title = 'blog-welcome';

    let title = 'react blog example!';
    return (
        <Bundle load={loadWelcome}>
            {(Welcome) => <Welcome {...props} title={title} />}
        </Bundle>
    );
};

const List = (props) => {
    require('../sass/modules/blog/list');
    document.title = 'blog-list';

    return (
        <Bundle load={loadList}>
            {(List) => <List {...props} />}
        </Bundle>
    );
};

const Add = (props) => {
    require('../sass/modules/blog/add');
    document.title = 'blog-add';

    return (
        <Bundle load={loadAdd}>
            {(Add) => <Add {...props} />}
        </Bundle>
    );
};

/* component */
class Blog extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="hl-header">
                        <div>
                            <Link to="/">Home</Link>
                        </div>
                        <div>
                            <Link to="/list">List</Link>
                        </div>
                        <div>
                            <Link to="/add">Add</Link>
                        </div>
                    </div>
                    <div className="hl-container">
                        <Switch>
                            <Route exact path="/" component={Welcome} />
                            <Route path="/list" component={List} />
                            <Route path="/add" component={Add} />
                            <Route component={F404}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Blog;
