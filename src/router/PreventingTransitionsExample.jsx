import React from 'react';
import {
    BrowserRouter,
    HashRouter,
    Route,
    Link,
    Prompt // 防止转换.
} from 'react-router-dom';

let Router = process.env.NODE_ENV == 'prodcution' ? BrowserRouter : HashRouter;

const PreventingTransitionsExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Form</Link></li>
                <li><Link to="/one">One</Link></li>
                <li><Link to="/two">Two</Link></li>
            </ul>
            <Route path="/" exact component={Form}/>
            <Route path="/one" render={() => <h3>One</h3>}/>
            <Route path="/two" render={() => <h3>Two</h3>}/>
        </div>
    </Router>
);

class Form extends React.Component {
    constructor(props) {
        super(props);

        // state.
        this.state = {
            isBlocking: false
        }
    }

    render() {
        const {isBlocking} = this.state;

        return (
                <form
                    onSubmit={event => {
                        event.preventDefault()
                        event.target.reset()
                        this.setState({
                            isBlocking: false
                        })
                    }
                }>
                <Prompt // 防止转换 通常是在表单输入时使用.
                    when={isBlocking} // 是否开启防止转换.
                    message={location => ( // 说明.
                        `Are you sure you want to go to ${location.pathname}`
                    )}
                />
                <p>
                    Blocking? {isBlocking ? 'Yes, click a link or the back button' : 'Nope'}
                </p>
                <p>
                    <input
                        size="50"
                        placeholder="type something to block transitions"
                        onChange={event => {
                            this.setState({
                                isBlocking: event.target.value.length > 0
                            })
                        }
                    }/>
                </p>
                <p>
                    <button>Submit to stop blocking</button>
                </p>
            </form>
        );
    }
}

export default PreventingTransitionsExample;
