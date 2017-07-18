/* react */
// import React, {Component, PropTypes} from 'react';
import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import ReactDOM from 'react-dom';

/* sass */
// require('./sass/main');
import './sass/main';
// require('./sass/modules/main/main');
import './sass/modules/main/main';


/*--- 编译后，JSX表达成为JavaScript对象 ---*/

/*---------- QUICK START - Introducing JSX ----------*/

/**
 * @desc 最简单的例子.
 * @other HTML语言直接写在JavaScript语言之中, 不加任何引号, 这就是JSX的语法, 它允许HTML与JavaScript的混写.
 */

/* render */
// ReactDOM.render(
//     <h1>Hello, world!</h1>, document.getElementById('app')
// );



/**
 * @desc 一个简单的组件.
 */
// let element = (
//     <h1>
//         Hello, world!
//     </h1>
// );

/* render */
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 一个简单的组件, 在组件中调用方法.
 * @other 下面代码体现了JSX的基本语法规则：遇到HTML标签（以 < 开头）, 就用HTML规则解析；遇到代码块（以 { 开头）, 就用JavaScript规.
 */
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
//
// let formatName = (user) => {
//     return user.firstName + ' ' + user.lastName;
// };
//
// let element = (
//     <h2>
//         {formatName(user)}
//     </h2>
// );

/* render */
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc JSX编译后是javascript对象因此可以使用表达式.
 */
// const user = {
//     firstName: 'Long',
//     lastName: 'Cloud'
// };
//
// let formatName = (user) => {
//     return user.firstName + ' ' + user.lastName;
// };

/* return时单行可以不加圆括号(), 多行则需要放在圆括号()中 */
// let getGreeting = (user) => {
//     if (user) {
//         return <h3>Hello, {formatName(user)}!</h3>;
//     }
//
//     return (
//         <h3>
//             Hello, Stranger.
//         </h3>
//     );
// }
//
// let element = (
//     <div>
//         {getGreeting()}
//         {getGreeting(user)}
//     </div>
// );

/* render */
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc html属性、自定义属性.
 */
// import avatar from './assets/images/global/boss_22x22.png'; // 导入图片.
// const element1 = <div tabIndex="0" data-type="1">tabIndex attr</div>;
// const element2 = (
//     <img src={avatar} />
// );
//
// let element = (
//     <div>
//         {element1}
//         {element2}
//     </div>
// );
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 避免xss攻击.
 */
// const title = escape('<a href="http://www.163.com">163</a>');
// const element = <h1>{title}</h1>; // This is safe:
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 在jsx中class要写成className, 下面element1和element2最终结果是相同的.
 * @other React.createElement()会做语法检查提醒我们哪里写错了.
 */
// const element1 = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );
//
// const element2 = React.createElement(
//     'h1',
//     {className: 'greeting'},
//     'Hello, world 1!'
// );
//
// let element = (
//     <div>
//         {element1}
//         {element2}
//     </div>
// );
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );

/* 上面element2使用React.createElement()实际是创建了如下对象.
const element2 = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world'
    }
};
*/



/*---------- QUICK STARTR - endering Elements ----------*/

/* Elements是构建React应用程序的最小模块 */

/**
 * @desc 每一秒render一次整个页面. 实际的项目中我们只render一次整个页面，然后用状态来局部更新.
 * @other 虚拟DOM、MVVM.
 */
// let tick = () => {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//
//     ReactDOM.render(
//         element,
//         document.getElementById('app')
//     );
// }
//
// setInterval(tick, 1000);



/*---------- QUICK STARTR - Components and Props ----------*/

/**
 * @desc 最简单的组件是一个function.
 */
// const props = {
//     name: 'Long Cloud!'
// };
//
// let Welcome = (props) => {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// let element = (
//     <div>
//         {Welcome(props)}
//     </div>
// );
//
// ReactDOM.render(
//     element, document.getElementById('app')
// );



/**
 * @desc 使用es6 class编写组件.
 *       welcome组件, 并给组件传递props.
 */
// import Welcome from './containers/examples/welcome';
// ReactDOM.render(
//     <Welcome name="Long Cloud" />, document.getElementById('app')
// );


/**
 * @desc 给组件传递props
 * @other Let's recap what happens in this example:
 *      1、We call ReactDOM.render() with the <Welcome name="Sara" /> element.
 *      2、React calls the Welcome component with {name: 'Sara'} as the props.
 *      3、Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
 *      4、React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.
 * @caveat 组件名以大写字母开头.
 */

/* 实例1 */
// let Welcome = (props) => {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// const element = <Welcome name="Sara" />;
//
// ReactDOM.render(
//     element,
//     document.getElementById('app')
// );

/* 实例2: 传递一个对象 */
// let Welcome = (props) => {
//     return <h1>Hello, {props.data.name}! age: {props.data.age}</h1>;
// }
//
// let data = {name: 'cloud long', age: 18};
// const element = <Welcome data={data} />;
//
// ReactDOM.render(
//     element,
//     document.getElementById('app')
// );


/**
 * @desc Components can refer to other components in their output.
 *       This lets us use the same component abstraction for any level of detail.
 *       A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components.
 *
 * @other Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.
 */
/* 实例1 */
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
//
// function App() {
//     return (
//         <div>
//             <Welcome name="Sara" />
//             <Welcome name="Cahal" />
//             <Welcome name="Edite" />
//         </div>
//     );
// }
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );



/**
 * @desc Extracting Components
 */
/* 实例1 */
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <div className="UserInfo">
//                 <img className="Avatar"
//                     src={props.author.avatarUrl}
//                     alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                     {props.author.name}
//                 </div>
//             </div>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };
//
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('app')
// );

/* 实例2: 将实例1拆分成更小的组件 */
// function Avatar(props) {
//     return (
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     );
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     );
// }
//
// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.author} />
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     );
// }
//
// const comment = {
//     date: new Date(),
//     text: 'I hope you enjoy learning React!',
//     author: {
//         name: 'Hello Kitty',
//         avatarUrl: 'http://placekitten.com/g/64/64'
//     }
// };
//
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('app')
// );



/**
 * @desc Props are Read-Only
 */
// let Welcome = props => {
//     // props.name = 'Saber'; // error writing, props ares readonly.
//     return <h1>Hello, {props.name}</h1>
// };
//
// ReactDOM.render(
//     <Welcome name="Long Cloud" />,
//     document.getElementById('app')
// );



/*---------- QUICK START - State and Lifecycle ----------*/

/**
 * @desc 组件使用状态和生命周期制作时钟.
 *
 * @other Let's quickly recap what's going on and the order in which the methods are called:
 *
 *      1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component.
 *         Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
 *
 *      2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen.
 *         React then updates the DOM to match the Clock's render output.
 *
 *      3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook.
 *         Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.
 *
 *      4) Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time.
 *         Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn what should be on the screen.
 *         This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
 *
 *      5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.
 */
// class Clock extends React.Component {
//     // use constructor init state.
//     constructor(props) {
//         super(props); // Class components should always call the base constructor with props.
//         this.state = {date: new Date()};
//     }
//
//     // 
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     // 
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//
//     // 
//     tick() {
//         // Wrong: unable update state.
//         // this.state.date = new Date();
// 
//         // Correct: use this.setState() update state.
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>Hello, world!</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// ReactDOM.render(
//     <Clock />,
//     document.getElementById('app')
// );



/**
 * @desc 计数器(State Updates May Be Asynchronous)
 */
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             counter: 0
//         };
//     }
// 
//     //
//     componentDidMount() {
//         this.CounterClear = setInterval(
//             () => this.add(),
//             1000
//         );
//     }
// 
//     //
//     componentWillUnmount() {
//         clearInterval(this.CounterClear);
//     }
// 
//     //
//     add() {
//         // Wrong
//         // this.setState({
//         //     counter: this.state.counter + step,
//         // });
// 
//         // Correct
//         let prevState = this.state;
//         let props = this.props;
//         this.setState((prevState, porps) => ({counter: Number(prevState.counter) + Number(props.step)}));
//     }
// 
//     render() {
//         return (
//             <div>
//                 计数: {this.state.counter}
//             </div>
//         );
//     }
// }
// 
// /* 每个组件都是独立的互不影响 */
// let App = () => {
//     return (
//         <div>
//             <Counter step="1" />
//             <Counter step="2" />
//             <Counter step="3" />
//         </div>
//     );
// };
// 
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );



/**
 * @desc state update meger
 * 
constructor(props) {
    super(props);
    this.state = {
        posts: [],
        comments: []
    };
}

componentDidMount() {
    fetchPosts().then(response => {
        this.setState({
            posts: response.posts
        });
    });

    fetchComments().then(response => {
        this.setState({
            comments: response.comments
        });
    });
}*/



/*---------- QUICK START - Handling Events ----------*/

/**
 * @desc 简单的事件处理.
 */
// function ActionLink() {
//     function handleClick(e) {
//         e.preventDefault();
//         console.log('The link was clicked.');
//     }
// 
//     return (
//         <a href="#" onClick={handleClick}>
//             Click me
//         </a>
//     );
// }
// 
// ReactDOM.render(
//     <ActionLink />,
//     document.getElementById('app')
// );



/**
 * @desc 使用es6 class定义组件并绑定事件(使用属性初始化语法)
 */
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true
//         };
// 
//         // This binding is necessary to make `this` work in the callback
//         this.handleClick = this.handleClick.bind(this); // using property initializer syntax.
//     }
// 
//     handleClick() {
//         console.log(this.props.desc);
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
// 
//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Toggle desc="别点我" />,
//     document.getElementById('app')
// );



/**
 * @desc 使用es6 class定义组件并绑定事件(使用箭头回调函数).
 *       If you aren't using property initializer syntax, you can use an arrow function in the callback
 *
 * other 推荐使用属性初始化语法.
 *       if this callback is passed as a prop to lower components, those components might do an extra re-rendering.
 *       We generally recommend binding in the constructor or using the property initializer syntax, to avoid this sort of performance problem
 */
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isToggleOn: true
//         };
//     }
// 
//     handleClick(e) {
//         console.log(e, e.target);
//         console.log(this.props.desc);
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//     }
// 
//     render() {
//         // use an arrow function in the callback: <button onClick={(e) => this.handleClick(e)}>
//         return (
//             <button onClick={(e) => this.handleClick(e)}>
//                 {this.state.isToggleOn ? 'ON' : 'OFF'}
//             </button>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Toggle desc="别点我" />,
//     document.getElementById('app')
// );



/*---------- QUICK START - Conditional Rendering ----------*/

/**
 * @desc 根据是否登录(条件)呈现不同的问候语.
 */
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
// 
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
// 
//     return <GuestGreeting />;
// }
// 
// ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('app')
// );



/**
 * @desc 元素变量：登录、退出.
 */
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 
//         this.state = {isLoggedIn: false};
//     }
// 
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
// 
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
// 
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
// 
//         let button = null; // 使用变量存储元素.
//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }
// 
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }
// 
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// 
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
// 
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
// 
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('app')
// );



/**
 * @desc 在jsx的{}中可以写任何表达式.
 */
// function Mailbox(props) {
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Hello!</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     You have {unreadMessages.length} unread messages.
//                 </h2>
//             }
//         </div>
//     );
// }
// 
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages} />,
//     document.getElementById('app')
// );



/**
 * @desc 使用三目运算符.
 */
// class LoginController extends React.Component {
//     constructor(props) {
//         super(props);
//         
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <div>
//                 The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <LoginController />,
//     document.getElementById('app')
// );



/**
 * @desc 使用算目运算符.
 */
// class LoginControl extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
// 
//         this.state = {isLoggedIn: false};
//     }
// 
//     handleLoginClick() {
//         this.setState({isLoggedIn: true});
//     }
// 
//     handleLogoutClick() {
//         this.setState({isLoggedIn: false});
//     }
// 
//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {isLoggedIn ? (
//                     <LogoutButton onClick={this.handleLogoutClick} />
//                 ) : (
//                     <LoginButton onClick={this.handleLoginClick} />
//                 )}
//             </div>
//         );
//     }
// }
// 
// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }
// 
// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }
// 
// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }
// 
// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }
// 
// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }
// 
// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('app')
// );



/**
 * @desc 防止组件呈现.
 */
// function WarningBanner(props) {
//     if (!props.warn) {
//         return null;
//     }
// 
//     return (
//         <div className="warning">
//             Warning!
//         </div>
//     );
// }
// 
// class Page extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {showWarning: true}
//         this.handleToggleClick = this.handleToggleClick.bind(this);
//     }
// 
//     handleToggleClick() {
//         this.setState(prevState => ({
//             showWarning: !prevState.showWarning
//         }));
//     }
// 
//     render() {
//         return (
//             <div>
//                 <WarningBanner warn={this.state.showWarning} />
//                 <button onClick={this.handleToggleClick}>
//                     {this.state.showWarning ? 'Hide' : 'Show'}
//                 </button>
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Page />,
//     document.getElementById('app')
// );


/*---------- QUICK START - Lists and Keys ----------*/

/**
 * @desc
 */
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(number => number * 2);
// console.log(numbers, doubled);



/**
 * @desc 显示多个组件.
 */
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((number) =>
//     <li>{number}</li>
// );
// 
// ReactDOM.render(
//     <ul>{listItems}</ul>,
//     document.getElementById('app')
// );



/**
 * @desc 基础列表组件: 给列表设置key来区别他们的身份.
 */
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map(number => 
//         <li key={number.toString()}>
//             {number}
//         </li>
//     );
// 
//     return (
//         <ul>{listItems}</ul>
//     );
// }
// 
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('app')
// );



/**
 * @desc 不正确的key使用.
 */
// function ListItem(props) {
//     const value = props.value;
//     return (
//         // Wrong! There is no need to specify the key here:
//         <li key={value.toString()}>
//             {value}
//         </li>
//     );
// }
// 
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Wrong! The key should have been specified here:
//         <ListItem value={number} />
//     );
// 
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }
// 
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('app')
// );



/**
 * @desc 正确的key使用.
 */
// function ListItem(props) {
//     // Correct! There is no need to specify the key here:
//     return <li>{props.value}</li>;
// }
// 
// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//         // Correct! Key should be specified inside the array.
//         <ListItem key={number.toString()} 
//             value={number} />
//     );
// 
//     return (
//         <ul>
//             {listItems}
//         </ul>
//     );
// }
// 
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('app')
// );



/**
 * @desc Keys Must Only Be Unique Among Siblings.
 * @other Keys used within arrays should be unique among their siblings. However they don't need to be globally unique.
 *        We can use the same keys when we produce two different arrays.
 */
// function Blog(props) {
//     const sidebar = (
//         <ul>
//             {props.posts.map((post) =>
//                 <li key={post.id}>
//                     {post.title}
//                 </li>
//             )}
//         </ul>
//     );
// 
//     const content = props.posts.map((post) =>
//         <div key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//         </div>
//     );
// 
//     return (
//         <div>
//             {sidebar}
//             <hr />
//             {content}
//         </div>
//     );
// }
// 
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// 
// ReactDOM.render(
//     <Blog posts={posts} />,
//     document.getElementById('app')
// );



/**
 * @desc key不会传递给组件, 如果你想使用key中的值请赋给其他属性，例如下面的id.
 */
// const content = posts.map((post) =>
//         <Post
//             key={post.id}
//             id={post.id}
//             title={post.title} />
// );



/**
 * @desc JSX允许在花括号中嵌入表达式及map.
 */
// function ListItem(props) {
//     return <li>{props.value}</li>;
// }
// 
// function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//         <ul>
//             {
//                 numbers.map((number) =>
//                     <ListItem key={number.toString()} value={number} />
//                 )
//             }
//         </ul>
//     );
// }
// 
// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('app')
// );




/*---------- QUICK START - Forms ----------*/

/**
 * @desc Controlled Components.
 */
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
// 
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
// 
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
// 
//     handleSubmit(event) {
//         console.log('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
// 
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//        );
//     }
// }
// 
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('app')
// );



/**
 * @desc textarea.
 */
// class EssayForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'Please write an essay about your favorite DOM element.'
//         };
// 
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
// 
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
// 
//     handleSubmit(event) {
//         console.log('An essay was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
// 
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <textarea value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//        );
//     }
// }
// 
// ReactDOM.render(
//     <EssayForm />,
//     document.getElementById('app')
// );



/**
 * @desc select.
 */
// class FlavorForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: 'coconut'};
// 
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
// 
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
// 
//     handleSubmit(event) {
//         console.log('Your favorite flavor is: ' + this.state.value);
//         event.preventDefault();
//     }
// 
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                    Pick your favorite La Croix flavor:
//                     <select value={this.state.value} onChange={this.handleChange}>
//                         <option value="grapefruit">Grapefruit</option>
//                         <option value="lime">Lime</option>
//                         <option value="coconut">Coconut</option>
//                         <option value="mango">Mango</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('app')
// );



/**
 * @desc 处理多个input.
 */
// class Reservation extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isGoing: true,
//             numberOfGuests: 2
//         };
// 
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }
// 
//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'checkbox' ? target.checked : target.value;
//         const name = target.name;
// 
//         // ES6计算属性(https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names).
//         this.setState({
//             [name]: value
//         });
// 
//         // ES5.
//         // var partialState = {};
//         // partialState[name] = value;
//         // this.setState(partialState);
//     }
// 
//     render() {
//         return (
//             <form>
//                 <label>
//                     Is going:
//                     <input
//                         name="isGoing"
//                         type="checkbox"
//                         checked={this.state.isGoing}
//                         onChange={this.handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                     Number of guests:
//                     <input
//                         name="numberOfGuests"
//                         type="number"
//                         value={this.state.numberOfGuests}
//                         onChange={this.handleInputChange} />
//                 </label>
//             </form>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Reservation />,
//     document.getElementById('app')
// );



/*---------- QUICK START - Lifting State Up ----------*/

/**
 * @desc 简单实例：水温计算器.
 */
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }
// 
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {temperature: ''};
//     }
// 
//     handleChange(e) {
//         this.setState({temperature: e.target.value});
//     }
// 
//     render() {
//         const temperature = this.state.temperature;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in Celsius:</legend>
//                 <input
//                     value={temperature}
//                     onChange={this.handleChange} />
//                 <BoilingVerdict
//                     celsius={parseFloat(temperature)} />
//             </fieldset>
//        );
//     }
// }
// 
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('app')
// );



/**
 * @desc 计算摄氏、华氏.
 */
// const scaleNames = {
//     c: 'Celsius',
//     f: 'Fahrenheit'
// };
// 
// // 摄氏度.
// function toCelsius(fahrenheit) {
//     return (fahrenheit - 32) * 5 / 9;
// }
// 
// // 华氏.
// function toFahrenheit(celsius) {
//     return (celsius * 9 / 5) + 32;
// }
// 
// function tryConvert(temperature, convert) {
//     const input = parseFloat(temperature);
//     if (Number.isNaN(input)) {
//         return '';
//     }
//     const output = convert(input);
//     const rounded = Math.round(output * 1000) / 1000;
//     return rounded.toString();
// }
// 
// // 是否沸腾.
// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }
// 
// class TemperatureInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//     }
// 
//     handleChange(e) {
//         this.props.onTemperatureChange(e.target.value);
//     }
// 
//     render() {
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <fieldset>
//                 <legend>Enter temperature in {scaleNames[scale]}:</legend>
//                 <input value={temperature}
//                     onChange={this.handleChange} />
//             </fieldset>
//        );
//     }
// }
// 
// // 计算器.
// class Calculator extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//         this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//         this.state = {temperature: '', scale: 'c'};
//     }
// 
//     handleCelsiusChange(temperature) {
//         this.setState({scale: 'c', temperature});
//     }
// 
//     handleFahrenheitChange(temperature) {
//         this.setState({scale: 'f', temperature});
//     }
// 
//     render() {
//         const scale = this.state.scale;
//         const temperature = this.state.temperature;
//         const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
// 
//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleCelsiusChange} />
// 
//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleFahrenheitChange} />
// 
//                 <BoilingVerdict
//                     celsius={parseFloat(celsius)} />
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Calculator />,
//     document.getElementById('app')
// );



/*---------- QUICK START - Composition vs Inheritance ----------*/

/**
 * @desc props.children.
 */
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//    );
// }
// 
// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 Welcome1
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     );
// }
// 
// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('app')
// );



/**
 * @desc 不使用props.children, 使用组件组合.
 */
// function Contacts() {
//     return <div className="Contacts" />;
// }
// 
// function Chat() {
//     return <div className="Chat">chat</div>;
// }
// 
// function SplitPane(props) {
//     return (
//         <div className="SplitPane">
//             <div className="SplitPane-left">
//                 {props.left}
//             </div>
//             <div className="SplitPane-right">
//                 {props.right}
//             </div>
//         </div>
//     );
// }
// 
// function App() {
//     return (
//         <SplitPane left={<Contacts />} right={<Chat />} />
//     );
// }
// 
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );



/**
 * @desc In React, this is also achieved by composition, where a more "specific" component renders a more "generic" one and configures it with props
 */
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//    );
// }
// 
// function Dialog(props) {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//         </FancyBorder>
//     );
// }
// 
// function WelcomeDialog() {
//     return (
//         <Dialog
//             title="Welcome"
//             message="Thank you for visiting our spacecraft!" />
//     );
// }
// 
// ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('app')
// );



/**
 * @desc 组合对于定义为类的组件同样有效.
 */
// function FancyBorder(props) {
//     return (
//         <div className={'FancyBorder FancyBorder-' + props.color}>
//             {props.children}
//         </div>
//     );
// }
// 
// function Dialog(props) {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 {props.title}
//             </h1>
//             <p className="Dialog-message">
//                 {props.message}
//             </p>
//             {props.children}
//         </FancyBorder>
//     );
// }
// 
// class SignUpDialog extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSignUp = this.handleSignUp.bind(this);
//         this.state = {login: ''};
//     }
// 
//     render() {
//         return (
//             <Dialog title="Mars Exploration Program" message="How should we refer to you?">
//                 <input value={this.state.login} onChange={this.handleChange} />
//                 <button onClick={this.handleSignUp}>
//                     Sign Me Up!
//                 </button>
//             </Dialog>
//         );
//     }
// 
//     handleChange(e) {
//         this.setState({login: e.target.value});
//     }
// 
//     handleSignUp() {
//         console.log(`Welcome aboard, ${this.state.login}!`);
//     }
// }
// 
// ReactDOM.render(
//     <SignUpDialog />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - JSX In Depth ----------*/

/**
 * @desc 创建元素.
 * @other React.createElement(component, props, ...children)
 */
// JSX.
// function MyButton(props) {
//     return (
//         <div className={props.color} data-shadow={props.shadowSize}>
//             {props.children}
//         </div>
//     ); 
// }
// 
// ReactDOM.render(
//     <MyButton color="blue" shadowSize={2}>
//         Click Me
//     </MyButton>,
//     document.getElementById('app')
// );

// compiles.
// const myButtonEle = React.createElement(
//     'div',
//     {color: 'blue', 'data-shadow': 2},
//     'Click Me'
// );
// 
// function App() {
//     return (
//         <div>
//             {myButtonEle}
//         </div>
//     );
// }
// 
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );

// JSX.
// function Test() {
//     return <div className="sidebar" />;
// }
// 
// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );

// compiles.
// const testEle = React.createElement(
//     'div',
//     {className: 'sidebar'},
//     null
// );
// 
// function Test() {
//     return <div>{testEle}</div>;
// }
// 
// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );

// 综合实例.
// function Test(props) {
//     return <div>{props.title}</div>
// }
// 
// ReactDOM.render(
//     // <Test title="hello" />,
//     React.createElement(Test, {title: 'hello world'}, null),
//     document.getElementById('app')
// );



/**
 * @desc Using Dot Notation for JSX Type.
 */
// const MyComponents = {
//     DatePicker: function DatePicker(props) {
//         return <div>Imagine a {props.color} datepicker here.</div>;
//     }
// }
// 
// function BlueDatePicker() {
//     return <MyComponents.DatePicker color="blue" />;
// }
// 
// 
// ReactDOM.render(
//     <BlueDatePicker />,
//     document.getElementById('app')
// );



/**
 * @desc 组件首字母必须大写.
 */
// Wrong! This is a component and should have been capitalized:
// function hello(props) {
//     // Correct! This use of <div> is legitimate because div is a valid HTML tag:
//     return <div>Hello {props.toWhat}</div>;
// }
// 
// function HelloWorld() {
//     // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
//     return <hello toWhat="World" />;
// }

// Correct! This is a component and should be capitalized:
// function Hello(props) {
//     // Correct! This use of <div> is legitimate because div is a valid HTML tag:
//     return <div>Hello {props.toWhat}</div>;
// }
// 
// function HelloWorld() {
//     // Correct! React knows <Hello /> is a component because it's capitalized.
//     return <Hello toWhat="World" />;
// }
// 
// ReactDOM.render(
//     <HelloWorld />,
//     document.getElementById('app')
// );



/**
 * @desc Choosing the Type at Runtime.
 */
// import { PhotoStory, VideoStory } from './components/test/stories';
// 
// const components = {
//     photo: PhotoStory,
//     video: VideoStory
// };
// 
// function Story(props) {
//     // Wrong! JSX type can't be an expression.
//     // return <components[props.storyType] story={props.story} />;
// 
//     // Correct! JSX type can be a capitalized variable.
//     const SpecificStory = components[props.storyType];
//     return <SpecificStory story={props.story} />;
// }
// 
// ReactDOM.render(
//     <Story storyType="photo" story="my is photo story" />,
//     document.getElementById('app')
// );



/**
 * @desc Props in JSX.
 */
// function NumberDescriber(props) {
//     let description;
//     if (props.number % 2 == 0) {
//         description = <strong>even</strong>;
//     } else {
//         description = <i>odd</i>;
//     }
//     return <div>{props.number} is an {description} number</div>;
// }
// 
// ReactDOM.render(
//     <NumberDescriber number={1 + 2 + 3 + 4} />,
//     document.getElementById('app')
// );



/**
 * @desc 字面量.
 */
// function MyComponent(props) {
//     return <div>{props.message}</div>;
// }
// 
// ReactDOM.render(
//     // You can pass a string literal as a prop. These two JSX expressions are equivalent.
//     // <MyComponent message="hello world" />,
//     // <MyComponent message={'hello world'} />,
// 
//     // When you pass a string literal, its value is HTML-unescaped. So these two JSX expressions are equivalent
//     // <MyComponent message="&lt;3" />,
//     // <MyComponent message={'<3'} />,
// 
//     <MyComponent message={"<a href='http://www.react.com'>react</a>"} />,
//     document.getElementById('app')
// );



/**
 * @desc Props Default to "True"
 */
// function MyTextBox(props) {
//     return <div className={props.autocomplete}>{props.autocomplete}</div>;
// }
// 
// ReactDOM.render(
//     <MyTextBox autocomplete />,
//     // <MyTextBox autocomplete={true} />,
//     document.getElementById('app')
// );



/**
 * @desc Spread Attributes.
 */
// function Greeting(props) {
//     return <div>{props.firstName} - {props.lastName}</div>;
// }
// 
// function App1() {
//     return <Greeting firstName="Ben" lastName="Hector" />;
// }
// 
// function App2() {
//     const props = {firstName: 'Ben', lastName: 'Hector'};
//     return <Greeting {...props} />;
// }
// 
// ReactDOM.render(
//     <App2 />,
//     document.getElementById('app')
// );



/**
 * @desc Children in JSX.
 */
/* 实例1 */
// function MyComponent(props) {
//     return <div>{props.children}</div>;
// }
// 
// ReactDOM.render(
//     <MyComponent>Hello world!</MyComponent>,
//     document.getElementById('app')
// );

/* 实例2 */
// function MyComponent(props) {
//     return <div>This is valid HTML &amp; JSX at the same time.</div>;
// }
// 
// ReactDOM.render(
//     <MyComponent />,
//     document.getElementById('app')
// );



/**
 * @desc JSX Children
 */
// function MyContainer(props) {
//     return <div>{props.children}</div>;
// }
// 
// function MyFirstComponent(props) {
//     return <div>my is MyFirstComponent</div>;
// }
// 
// function MySecondComponent(props) {
//     return <div>my is MySecondComponent</div>;
// }
// 
// ReactDOM.render(
//     <MyContainer>
//         <MyFirstComponent />
//         <MySecondComponent />
//     </MyContainer>,
//     document.getElementById('app')
// );


/**
 * @desc JavaScript Expressions as Children.
 */
// 实例1.
// function MyComponent(props) {
//     return <div>{props.children}</div>;
// }
// 
// ReactDOM.render(
//     // <MyComponent>foo</MyComponent>,
//     <MyComponent>{'foo'}</MyComponent>,
//     document.getElementById('app')
// );

// 实例2.
// function Item(props) {
//     return <li>{props.message}</li>;
// }
// 
// function TodoList() {
//     const todos = ['finish doc', 'submit pr', 'nag dan to review'];
//     return (
//         <ul>
//             {
//                 todos.map((msg) => <Item key={msg} message={msg} />)
//             }
//         </ul>
//    );
// }
// 
// ReactDOM.render(
//     <TodoList />,
//     document.getElementById('app')
// );



/**
 * @desc Functions as Children.
 */
// Calls the children callback numTimes to produce a repeated component
// function Repeat(props) {
//     let items = [];
//     for (let i = 0; i < props.numTimes; i++) {
//         items.push(props.children(i));
//     }
//     return <div>{items}</div>;
// }
// 
// function ListOfTenThings() {
//     return (
//         <Repeat numTimes={10}>
//             {(index) => <div key={index}>This is item {index} in the list</div>}
//         </Repeat>
//     );
// }
// 
// ReactDOM.render(
//     <ListOfTenThings />,
//     document.getElementById('app')
// );



/**
 * @desc 布尔值、null、未定义将被忽略.
 */
// false, null, undefined, and true are valid children. They simply don't render. These JSX expressions will all render to the same thing.
// function Test() {
//     return (
//         <div>
//             <div />
//             <div></div>
//             <div>{false}</div>
//             <div>{null}</div>
//             <div>{undefined}</div>
//             <div>{true}</div>
//         </div>
//     );
// }
// 
// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );



/**
 * @desc 当show为true: 显示Test1组件; false: 不显示Test1组件，只有值为false、null、undefined时才不显示 
 */
// function Test() {
//     let show = true;
//     return (
//         <div>
//             {
//                 show && <Test1 /> 
//             }
//         </div>
//     );
// }
// 
// function Test1() {
//     return <div>gogogo</div>;
// }
// 
// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );



/**
 * @desc props.list.length如果等于0将会输出0并且不会显示Test1组件,为了解决这个问题可以想下面这样写.
 */
// function Test(props) {
//     return (
//         <div>
//             {
//                 props.list.length > 0 && <Test1 /> 
//             }
//         </div>
//     );
// }
// 
// function Test1() {
//     return <div>gogogo</div>;
// }
// 
// ReactDOM.render(
//     <Test list={[]} />,
//     document.getElementById('app')
// );



/**
 * @desc 如果希望在输出中出现false、true、null或undefined的值，则必须首先将其转换为字符串
 */
// function Test(props) {
//     const myVariable = undefined;
//     return (
//         <div>
//              My JavaScript variable is {String(myVariable)}.
//         </div>
//     );
// }
// 
// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - Typechecking With PropTypes ----------*/

/* 注: 由于性能原因prop-types只是在开发模式下检查. */

/**
 * @desc 基础实例.
 */
import PropTypes from 'prop-types';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}

Greeting.propTypes = {
    name: PropTypes.string
};

// Type Wrong.
// const obj = {name: '123'}
ReactDOM.render(
    // Type Wrong.
    // <Greeting name={obj} />,

    // Correct.
    <Greeting name="Long Cloud" />,
    document.getElementById('app')
);















/* 常量调用 */
console.log(process.env.NODE_ENV);
console.log(__PROD__);
