/* react */
// import React, {Component, PropTypes} from 'react';
import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import ReactDOM from 'react-dom';

/* jquery */
import $ from 'jquery';

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
// import PropTypes from 'prop-types';
// 
// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// 
//     render() {
//         return (
//             <h1>Hello, {this.props.name}</h1>
//         );
//     }
// }
// 
// Greeting.propTypes = {
//     name: PropTypes.string
// };
// 
// // Type Wrong.
// // const obj = {name: '123'}
// ReactDOM.render(
//     // Type Wrong.
//     // <Greeting name={obj} />,
// 
//     // Correct.
//     <Greeting name="Long Cloud" />,
//     document.getElementById('app')
// );



/**
 * @desc 官方示例.
 */
// import PropTypes from 'prop-types';
// MyComponent.propTypes = {
//     // You can declare that a prop is a specific JS primitive. By default, these
//     // are all optional.
//     optionalArray: PropTypes.array,
//     optionalBool: PropTypes.bool,
//     optionalFunc: PropTypes.func,
//     optionalNumber: PropTypes.number,
//     optionalObject: PropTypes.object,
//     optionalString: PropTypes.string,
//     optionalSymbol: PropTypes.symbol,
// 
//     // Anything that can be rendered: numbers, strings, elements or an array
//     // (or fragment) containing these types.
//     optionalNode: PropTypes.node,
// 
//     // A React element.
//     optionalElement: PropTypes.element,
// 
//     // You can also declare that a prop is an instance of a class. This uses
//     // JS's instanceof operator.
//     optionalMessage: PropTypes.instanceOf(Message),
// 
//     // You can ensure that your prop is limited to specific values by treating
//     // it as an enum.
//     optionalEnum: PropTypes.oneOf(['News', 'Photos']),
// 
//     // An object that could be one of many types
//     optionalUnion: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.number,
//         PropTypes.instanceOf(Message)
//     ]),
// 
//     // An array of a certain type
//     optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
// 
//     // An object with property values of a certain type
//     optionalObjectOf: PropTypes.objectOf(PropTypes.number),
// 
//     // An object taking on a particular shape
//     optionalObjectWithShape: PropTypes.shape({
//         color: PropTypes.string,
//         fontSize: PropTypes.number
//     }),
// 
//     // You can chain any of the above with `isRequired` to make sure a warning
//     // is shown if the prop isn't provided.
//     requiredFunc: PropTypes.func.isRequired,
// 
//     // A value of any data type
//     requiredAny: PropTypes.any.isRequired,
// 
//     // You can also specify a custom validator. It should return an Error
//     // object if the validation fails. Don't `console.warn` or throw, as this
//     // won't work inside `oneOfType`.
//     customProp: function(props, propName, componentName) {
//         if (!/matchme/.test(props[propName])) {
//             return new Error(
//                     'Invalid prop `' + propName + '` supplied to' +
//                     ' `' + componentName + '`. Validation failed.'
//                     );
//         }
//     },
// 
//     // You can also supply a custom validator to `arrayOf` and `objectOf`.
//     // It should return an Error object if the validation fails. The validator
//     // will be called for each key in the array or object. The first two
//     // arguments of the validator are the array or object itself, and the
//     // current item's key.
//     customArrayProp: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
//         if (!/matchme/.test(propValue[key])) {
//             return new Error(
//                     'Invalid prop `' + propFullName + '` supplied to' +
//                     ' `' + componentName + '`. Validation failed.'
//                     );
//         }
//     })
// };
// 
// ReactDOM.render(
//     <Greeting name="Long Cloud" />,
//     document.getElementById('app')
// );



/**
 * @desc PropTypes.element.isRequired.
 */
// import PropTypes from 'prop-types';
// 
// class MyComponent extends React.Component {
//     render() {
//         // 这一定是一个元素, 如果不是会发出警告.
//         const children = this.props.children;
//         return (
//            <div>
//                 {children}
//            </div>
//         );
//     }
// }
// 
// MyComponent.propTypes = {
//     children: PropTypes.element.isRequired
// };
// 
// ReactDOM.render(
//     <MyComponent>
//         <div>PropTypes.element.isRequired</div>
//     </MyComponent>,
//     document.getElementById('app')
// );



/**
 * @desc 默认值.
 */
// class Greeting extends React.Component {
//     render() {
//         return (
//             <h1>Hello, {this.props.name}</h1>
//         );
//     }
// }
// 
// // 给props设置默认值.
// Greeting.defaultProps = {
//     name: 'Stranger'
// };
// 
// ReactDOM.render(
//     <Greeting />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - Refs and the DOM ----------*/

/* 
 * @desc When to Use Refs
 *       1) Managing focus, text selection, or media playback.
 *       2) Triggering imperative animations.
 *       3) Integrating with third-party DOM libraries.
 */



/*
 * @desc Legacy API: String Refs
 *
 *       If you worked with React before, you might be familiar with an older API where the ref attribute is a string, like "textInput", 
 *       and the DOM node is accessed as this.refs.textInput. We advise against it because string refs have some issues, are considered legacy, 
 *       and are likely to be removed in one of the future releases. If you're currently using this.refs.textInput to access refs, we recommend the callback pattern instead
 */



/**
 * @desc Adding a Ref to a DOM Element.
 */
// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.focus = this.focus.bind(this);
//     }
// 
//     focus() {
//         // Explicitly focus the text input using the raw DOM API
//         this.textInput.focus();
//     }
// 
//     render() {
//         // Use the `ref` callback to store a reference to the text input DOM
//         // element in an instance field (for example, this.textInput).
//         return (
//             <div>
//                 <input
//                     type="text"
//                     ref={
//                         (input) => {
//                             console.log(input);
//                             this.textInput = input; 
//                         }
//                     }
//                 />
// 
//                 <input
//                     type="button"
//                     value="Focus the text input"
//                     onClick={this.focus} />
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <CustomTextInput />,
//     document.getElementById('app')
// );



/**
 * @desc Adding a Ref to a Class Component
 */
// class CustomTextInput extends React.Component {
//     render() {
//         return <input ref="inputTest" type="text" />;
//     }
// }
// 
// class AutoFocusTextInput extends React.Component {
//     componentDidMount() {
//         this.textInput.focus();
//     }
// 
//     render() {
//         return (
//             <CustomTextInput ref={
//                     (input) => {
//                         this.textInput = input.refs.inputTest;
//                     }
//                 } 
//             />
//         );
//     }
// }
// 
// ReactDOM.render(
//     <AutoFocusTextInput />,
//     document.getElementById('app')
// );



/**
 * @desc Refs and Functional Components.
 */
/* 实例1 */
// function MyFunctionalComponent() {
//     return <input />;
// }
// 
// class Parent extends React.Component {
//     render() {
//         // This will *not* work!
//         return (
//             <MyFunctionalComponent ref={
//                 (input) => {
//                     console.log(input);
//                     this.textInput = input;
//                 }
//             } />
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Parent />,
//     document.getElementById('app')
// );

/* 实例2 */
// function CustomTextInput(props) {
//     // textInput must be declared here so the ref callback can refer to it
//     let textInput = null;
// 
//     function handleClick() {
//         textInput.focus();
//     }
// 
//     return (
//         <div>
//             <input
//                 type="text"
//                 ref={(input) => { textInput = input; }} />
// 
//             <input
//                 type="button"
//                 value="Focus the text input"
//                 onClick={handleClick}
//             />
//         </div>
//     );
// }
// 
// ReactDOM.render(
//     <CustomTextInput />,
//     document.getElementById('app')
// );



/**
 * @desc Exposing DOM Refs to Parent Components.
 */
/* 写法1 */
// function CustomTextInput(props) {
//     return (
//         <div>
//             <input type="text" ref={props.inputRef} />
//         </div>
//     );
// }
// 
// class Parent extends React.Component {
//     componentDidMount() {
//         console.log('------didmount', this.inputElement);
//     }
// 
//     render() {
//         return (
//             <CustomTextInput inputRef={el => {
//                     console.log(el);
//                     this.inputElement = el;
//                 }
//             } />
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Parent />,
//     document.getElementById('app')
// );

/* 写法2与写法1相等 */
// function CustomTextInput(props) {
//     return (
//         <div>
//             <input type="text" ref={props.inputRef} />
//         </div>
//     );
// }
// 
// class Parent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.inputRefFun = this.inputRefFun.bind(this);
//     }
// 
//     componentDidMount() {
//         console.log('------didmount', this.inputElement);
//     }
// 
//     inputRefFun(el) {
//         console.log(el);
//         this.inputElement = el;
//     }
// 
//     render() {
//         return (
//             <CustomTextInput inputRef={this.inputRefFun} />
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Parent />,
//     document.getElementById('app')
// );



/**
 * @desc Exposing DOM Refs to Parent Components.
 */
// function CustomTextInput(props) {
//     return (
//         <div>
//             <input ref={props.inputRef} />
//         </div>
//     );
// }
// 
// function Parent(props) {
//     return (
//         <div>
//             My input: <CustomTextInput inputRef={props.inputRef} />
//         </div>
//     );
// }
// 
// 
// class Grandparent extends React.Component {
//     componentDidMount() {
//         console.log(this.inputElement);
//     }
// 
//     render() {
//         return (
//             <Parent inputRef={el => this.inputElement = el} />
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Grandparent />,
//     document.getElementById('app')
// );



/**
 * @desc 事件实例.
 */
// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
// 
//     componentDidMount() {
//         this.handleClick();
//         // this.textInput.focus();
//     }
// 
//     handleClick() {
//         this.textInput.focus();
//     }
// 
//     render() {
//         return (
//             <div>
//                 <input
//                     type="text"
//                     ref={(input) => { this.textInput = input; }} />
// 
//                 <input
//                     type="button"
//                     value="Focus the text input"
//                     onClick={ this.handleClick }
//                 />
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <CustomTextInput />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - Uncontrolled Components ----------*/

/*
 * Likewise, <input type="checkbox"> and <input type="radio"> support defaultChecked, and <select> and <textarea> supports defaultValue
 */

/**
 * @desc this code accepts a single name in an uncontrolled component.
 */
// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
// 
//     handleSubmit(event) {
//         console.log('A name was submitted: ' + this.input.value);
//         event.preventDefault();
//     }
// 
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input type="text" ref={(input) => this.input = input} />
//                 </label>
//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <NameForm />,
//     document.getElementById('app')
// );



/**
 * @desc Default Values.
 */
// class Age extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// 
//     render() {
//         let result = '';
// 
//         result = this.props.list.map((obj) => {
//             return <AgeItem data={obj} key={'age_' + obj.age} />;
//         });
// 
//         return <div>{result}</div>;
//     }
// };
// 
// class AgeItem extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         this.handleRadio = this.handleRadio.bind(this);
//     }
// 
//     handleRadio(event) {
//         // 在子组件内获取值.
//         console.log(this.ageEle.value);
//     }
// 
//     render() {
//         let show = this.props.data.age == 20 ? true : false;
// 
//         return (
//             <div>
//                 <input type="radio" name="age" defaultValue={this.props.data.age} 
//                     defaultChecked={show} onClick={this.handleRadio} ref={(input) => {this.ageEle = input;}} />{this.props.data.age}
//             </div>
//         );
//     }
// };
// 
// class LoginForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
// 
//     handleSubmit(event) {
//         console.log('A name was submitted: ' + this.input.value);
//     }
// 
//     render() {
//         let ageList = [{name: 'long', age: 18}, {name: 'cloud', age: 20}];
// 
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Name:
//                     <input
//                         defaultValue="Bob"
//                         type="text"
//                         ref={(input) => this.input = input} />
//                 </label>
//                 <input type="submit" value="Submit" />
//                 <Age list={ageList} />
//             </form>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <LoginForm />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - Optimizing Performance ----------*/

/**
 * @desc The problem is that PureComponent will do a simple comparison between the old and new values of this.props.words.
 *       Since this code mutates the words array in the handleClick method of WordAdder, the old and new values of this.props.
 *       words will compare as equal, even though the actual words in the array have changed.
 *       The ListOfWords will thus not update even though it has new words that should be rendered
 */

/* 不能正常运行 */
// class ListOfWords extends React.PureComponent {
//     render() {
//         return <div>{this.props.words.join(',')}</div>;
//     }
// }
// 
// class WordAdder extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             words: ['marklar']
//         };
//         this.handleClick = this.handleClick.bind(this);
//     }
// 
//     handleClick() {
//         // This section is bad style and causes a bug
//         const words = this.state.words;
//         words.push('marklar');
//         this.setState({words: words});
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>add</button>
//                 <ListOfWords words={this.state.words} />
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <WordAdder />,
//     document.getElementById('app')
// );

/* 可以正常运行 */
// class ListOfWords extends React.PureComponent {
//     render() {
//         return <div>{this.props.words.join(',')}</div>;
//     }
// }
// 
// class WordAdder extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {
//             words: ['marklar']
//         };
// 
//         // func.
//         this.handleClick = this.handleClick.bind(this);
//     }
// 
//     handleClick() {
//         /* 可以使用如下两种方式更新状态并防止->The Power Of Not Mutating Data */
// 
//         // The simplest way to avoid this problem is to avoid mutating values that you are using as props or state.
//         // For example, the handleClick method above could be rewritten using concat as:
//         this.setState(prevState => ({
//             words: prevState.words.concat(['test'])
//         }));
// 
//         // ES6 supports a spread syntax for arrays which can make this easier. If you're using Create React App, this syntax is available by default.
//         // this.setState(prevState => ({
//         //     words: [...prevState.words, 'marklar1'],
//         // }));
//     }
// 
//     render() {
//         return (
//             <div>
//                 <button onClick={this.handleClick}>add</button>
//                 <ListOfWords words={this.state.words} />
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <WordAdder />,
//     document.getElementById('app')
// );



/**
 * @desc The Power Of Not Mutating Data.
 */
// function updateColorMap1(colormap) {
//     colormap.right = 'blue';
//     return colormap;
// }
// 
// // To write this without mutating the original object, we can use Object.assign method
// function updateColorMap2(colormap) {
//     return Object.assign({}, colormap, {right: 'blue'});
// }
// 
// // updateColorMap now returns a new object, rather than mutating the old one. Object.assign is in ES6 and requires a polyfill.
// // There is a JavaScript proposal to add object spread properties to make it easier to update objects without mutation as well:
// function updateColorMap3(colormap) {
//     return {...colormap, right: 'blue'};
// }
// 
// let testObj1 = updateColorMap1({title: 'updateColorMap1'});
// console.log(testObj1);
// let testObj2 = updateColorMap2({title: 'updateColorMap2'});
// console.log(testObj2);
// let testObj3 = updateColorMap3({title: 'updateColorMap3'});
// console.log(testObj3);






/*---------- ADVANCED GUIDES - React Without ES6 ----------*/

/**
 * @desc ES6
 */
// class Greeting extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// 
// ReactDOM.render(
//     <Greeting name="ES6" />,
//     document.getElementById('app')
// );



/**
 * @desc 类似ES6的API.
 */
// var createReactClass = require('create-react-class');
// var Greeting = createReactClass({
//     render: function() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// });
// 
// ReactDOM.render(
//     <Greeting name="similar ES6" />,
//     document.getElementById('app')
// );



/**
 * @desc Declaring Default Props.
 */
/* ES6 */
// class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// 
//     render() {
//         return <div>{this.props.name}</div>
//     }
// }
// 
// Greeting.defaultProps = {
//     name: 'Mary'
// };
// 
// ReactDOM.render(
//     <Greeting />,
//     document.getElementById('app')
// );



// var createReactClass = require('create-react-class');
// var Greeting = createReactClass({
//     getDefaultProps: function() {
//         return {
//             name: 'Mary-1'
//         };
//     },
//     render: function() {
//         return <h1>{this.props.name}</h1>;
//     },
// });
// 
// ReactDOM.render(
//     <Greeting />,
//     document.getElementById('app')
// );



/**
 * @desc Setting the Initial State.
 */
/* ES6 */
// class Counter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {count: props.initialCount};
//     }
// 
//     render() {
//         return <div>initialCount: {this.state.count}</div>
//     }
// }
// 
// ReactDOM.render(
//     <Counter initialCount="1" />,
//     document.getElementById('app')
// );



// var createReactClass = require('create-react-class');
// var Counter = createReactClass({
//     getInitialState: function() {
//         return {count: this.props.initialCount};
//     },
//     render: function() {
//         return <div>initialCount:{this.state.count}</div>;
//     }
// });
// 
// ReactDOM.render(
//     <Counter initialCount="100" />,
//     document.getElementById('app')
// );



/**
 * @desc Autobinding.
 *       In React components declared as ES6 classes, methods follow the same semantics as regular ES6 classes.
 *       This means that they don't automatically bind this to the instance. You'll have to explicitly use .bind(this) in the constructor
 */
/* ES6 */
// class SayHello extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {message: 'Hello!'};
// 
//         // This line is important!
//         this.handleClick = this.handleClick.bind(this);
//     }
// 
//     handleClick() {
//         alert(this.state.message);
//     }
// 
//     render() {
//         // Because `this.handleClick` is bound, we can use it as an event handler.
//         return (
//             <button onClick={this.handleClick}>
//                 Say hello
//             </button>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <SayHello />,
//     document.getElementById('app')
// );



/* not ES6 */
// var createReactClass = require('create-react-class');
// var SayHello = createReactClass({
//     getInitialState: function() {
//         return {message: 'Hello!'};
//     },
// 
//     handleClick: function() {
//         alert(this.state.message);
//     },
// 
//     render: function() {
//         return (
//             <button onClick={this.handleClick}>
//                 Say hello
//             </button>
//         );
//     }
// });
// 
// ReactDOM.render(
//     <SayHello />,
//     document.getElementById('app')
// );



/**
 * @desc Mixins.
 */






/*---------- ADVANCED GUIDES - React Without JSX ----------*/

/*
 * @desc the online Babel compiler -> https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&targets=&browsers=&builtIns=false&debug=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyA
 */

/**
 * @desc React Without JSX.
 */
/* JSX语法编写的代码 */
// class Hello extends React.Component {
//     render() {
//         return <div>Hello {this.props.toWhat}</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Hello toWhat="World" />,
//     document.getElementById('app')
// );



/* 不使用JSX语法编写代码 */
// class Hello extends React.Component {
//     render() {
//         return React.createElement('div', null, `Hello ${this.props.toWhat}`);
//     }
// }
// 
// ReactDOM.render(
//     React.createElement(Hello, {toWhat: 'World'}, null),
//     document.getElementById('app')
// );



/* 不使用JSX语法编写代码 */
// ReactDOM.render(
//     React.createElement('div', {className: 'test'}, 'Hello world!'),
//     document.getElementById('app')
// );



/* 简写 */
// const e = React.createElement;
// 
// ReactDOM.render(
//     e('div', null, 'Hello World'),
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - ----------*/

/**
 * @desc resize event
 */
// class Login extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // func.
//         this.resize = this.resize.bind(this);
//         this.resizeProc = this.resizeProc.bind(this);
//     }
// 
//     resize() {
//         window.addEventListener('resize', this.resizeProc);
//     }
// 
//     resizeProc() {
//         var bodyEle = document.querySelector('body');
//         console.log('window-height:', window.innerHeight);
//         console.log('body', bodyEle);
//     }
// 
//     render() {
//         this.resize();
// 
//         return <div></div>;
//     }
// }
// 
// ReactDOM.render(
//     <Login />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - Web Components ----------*/

/**
 * @desc Using Web Components in React.
 */
// class HelloMessage extends React.Component {
//     render() {
//         return <div>Hello <x-search>{this.props.name}</x-search>!</div>;
//     }
// }
// 
// ReactDOM.render(
//     <HelloMessage name="Long" />,
//     document.getElementById('app')
// );


/**
 * @desc Using React in your Web Components.
 */






/*---------- ADVANCED GUIDES - Higher-Order Components ----------*/

/**
 * @desc 一个高阶组件是一个函数,接受一个组件并返回一个新组件.
 */
// const EnhancedComponent = higherOrderComponent(WrappedComponent);



/**
 * @desc 例如: 假设你有一个CommentList组件,订阅外部数据源来呈现一个评论列表.
 */
// // 数据源.
// let DataSource = {
//     getComments() {
//         return [
//             {id: 1, title: '我是title1'},
//             {id: 2, title: '我是title2'},
//             {id: 3, title: '我是title3'},
//             {id: 4, title: '我是title4'},
//             {id: 5, title: '我是title5'},
//             {id: 6, title: '我是title6'},
//         ];
//     },
//     addChangeListener(handleChange) {
//     
//     },
//     removeChangeListener(handleChange) {
//     
//     }
// };
// 
// // 评论项.
// class Comment extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// 
//     render() {
//         return (
//             <div>
//                 {this.props.comment.id}-{this.props.comment.title}
//             </div>
//         );
//     }
// }
// 
// // 评论列表.
// class CommentList extends React.Component {
//     constructor() {
//         super();
// 
//         // func.
//         this.handleChange = this.handleChange.bind(this);
// 
//         // state.
//         this.state = {
//             // "DataSource" is some global data source
//             comments: DataSource.getComments()
//         };
//     }
// 
//     componentDidMount() {
//         // Subscribe to changes
//         DataSource.addChangeListener(this.handleChange);
//     }
// 
//     componentWillUnmount() {
//         // Clean up listener
//         DataSource.removeChangeListener(this.handleChange);
//     }
// 
//     handleChange() {
//         // Update component state whenever the data source changes
//         this.setState({
//             comments: DataSource.getComments()
//         });
//     }
// 
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.comments.map((comment) => (
//                         <Comment comment={comment} key={comment.id} />
//                     ))
//                 }
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <CommentList />,
//     document.getElementById('app')
// );



/**
 * @desc 博客文章评论完整实例.
 */
// /* 数据源 */
// let DataSource = {
//     idInc: 6,
//     commentData: [
//         {id: 1, content: '这条评论很好1'},
//         {id: 2, content: '这条评论很好2'},
//         {id: 3, content: '这条评论很好3'},
//         {id: 4, content: '这条评论很好4'},
//         {id: 5, content: '这条评论很好5'},
//         {id: 6, content: '这条评论很好6'},
//     ],
//     getComments() {
//         return this.commentData;
//     },
//     getBlogPost(id) {
//         return {time: '2017-07-20 12:00:00', text: '谁看这篇文章都说好!'};
//     },
//     addComment(data) {
//         this.idInc += 1;
//         this.commentData.push({id: this.idInc, content: data});
//     },
//     addChangeListener(handleFunc) {
//         handleFunc();
//     },
//     removeChangeListener(handleFunc) {
//         handleFunc();
//     }
// };
// 
// /* 评论列表 */
// class CommentList extends React.Component {
//     constructor() {
//         super();
//         this.handleChange = this.handleChange.bind(this);
//         this.state = {
//             // "DataSource" is some global data source
//             comments: DataSource.getComments()
//         };
//     }
// 
//     componentDidMount() {
//         // Subscribe to changes
//         DataSource.addChangeListener(this.handleChange);
//     }
// 
//     componentWillUnmount() {
//         // Clean up listener
//         DataSource.removeChangeListener(this.handleChange);
//     }
// 
//     handleChange() {
//         // Update component state whenever the data source changes
//         this.setState({
//             comments: DataSource.getComments()
//         });
//     }
// 
//     render() {
//         return (
//             <div>
//                 {
//                     this.state.comments.map((comment) => (
//                         <Comment comment={comment} key={comment.id} />
//                     ))
//                 }
// 
//                 <AddComment addHandleFunc={this.handleChange} />
//             </div>
//         );
//     }
// }
// 
// class Comment extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// 
//     render() {
//         return <div>{this.props.comment.id}-{this.props.comment.content}</div>;
//     }
// }
// 
// /* 添加评论 */
// class AddComment extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // func.
//         this.addHandleFunc = this.addHandleFunc.bind(this);
//     }
// 
//     addHandleFunc() {
//         DataSource.addComment(this.addInputEle.value);
//         this.props.addHandleFunc();
//         this.addInputEle.value = '';
//     }
// 
//     render() {
//         return (
//             <div>
//                 <input type="text" placeholder="请输入评论内容" ref={input => this.addInputEle = input} />
//                 <button type="button" onClick={this.addHandleFunc}>add</button>
//             </div>
//         );
//     }
// }
// 
// /* 博客文章详情 */
// class BlogPost extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // func.
//         this.handleChange = this.handleChange.bind(this);
// 
//         // state.
//         this.state = {
//             blogPost: DataSource.getBlogPost(props.id)
//         };
//     }
// 
//     componentDidMount() {
//         DataSource.addChangeListener(this.handleChange);
//     }
// 
//     componentWillUnmount() {
//         DataSource.removeChangeListener(this.handleChange);
//     }
// 
//     handleChange() {
//         this.setState({
//             blogPost: DataSource.getBlogPost(this.props.id)
//         });
//     }
// 
//     render() {
//         return <TextBlock data={this.state.blogPost} />;
//     }
// }
// 
// class TextBlock extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// 
//     render() {
//         return <div>{this.props.data.time} - {this.props.data.text}</div>;
//     }
// }
// 
// /* */
// const CommentListWithSubscription = withSubscription(
//     CommentList,
//     (DataSource) => DataSource.getComments()
// );
// 
// const BlogPostWithSubscription = withSubscription(
//     BlogPost,
//     (DataSource, props) => DataSource.getBlogPost(props.id)
// );
// 
// /* This function takes a component... */
// function withSubscription(WrappedComponent, selectData) {
//     // ...and returns another component...
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.handleChange = this.handleChange.bind(this);
//             this.state = {
//                 data: selectData(DataSource, props)
//             };
//         }
//         componentDidMount() {
//             // ... that takes care of the subscription...
//             DataSource.addChangeListener(this.handleChange);
//         }
//         componentWillUnmount() {
//             DataSource.removeChangeListener(this.handleChange);
//         }
//         handleChange() {
//             this.setState({
//                 data: selectData(DataSource, this.props)
//             });
//         }
//         render() {
//             // ... and renders the wrapped component with the fresh data!
//             // Notice that we pass through any additional props
//             return <WrappedComponent data={this.state.data} {...this.props} />;
//         }
//     };
// }
// 
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <BlogPostWithSubscription />
//                 <CommentListWithSubscription />
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <App />,
//     document.getElementById('app')
// );






/*---------- ADVANCED GUIDES - Integrating with Other Libraries ----------*/

/**
 * @desc jquery实例.
 */
// class SomePlugin extends React.Component {
//     componentDidMount() {
//         this.$el = $(this.el);
//         console.log(this.$el);
//         // this.$el.somePlugin();
//     }
// 
//     componentWillUnmount() {
//         // this.$el.somePlugin('destroy');
//     }
// 
//     render() {
//         return <div ref={el => this.el = el} />;
//     }
// }
// 
// ReactDOM.render(
//     <SomePlugin />,
//     document.getElementById('app')
// );



/**
 * @desc jquery实例.
 */
// class Chosen extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // func.
//         this.handleChange = this.handleChange.bind(this);
//     }
// 
//     componentDidMount() {
//         this.$el = $(this.el);
//         // this.$el.chosen();
// 
//         this.$el.on('change', this.handleChange);
//     }
// 
//     componentWillUnmount() {
//         this.$el.off('change', this.handleChange);
//         // this.$el.chosen('destroy');
//     }
// 
//     handleChange(e) {
//         this.props.onChange(e.target.value);
//     }
// 
//     render() {
//         return (
//             <div>
//                 <select className="Chosen-select" ref={el => this.el = el}>
//                     {this.props.children}
//                 </select>
//             </div>
//         );
//     }
// }
// 
// function Example() {
//     return (
//         <Chosen onChange={value => console.log(value)}>
//             <option>vanilla</option>
//             <option>chocolate</option>
//             <option>strawberry</option>
//         </Chosen>
//     );
// }
// 
// ReactDOM.render(
//     <Example />,
//     document.getElementById('app')
// );



/**
 * @desc jquery实例.
 */
// class Chosen extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // func.
//         this.handleChange = this.handleChange.bind(this);
//     }
// 
//     componentDidMount() {
//         this.$el = $(this.el);
//         // this.$el.chosen();
// 
//         this.$el.on('change', this.handleChange);
//     }
// 
//     componentDidUpdate(prevProps) {
//         console.log(prevProps, this.props);
//         if (prevProps.children !== this.props.children) {
//             // this.$el.trigger("chosen:updated");
//         }
//     }
// 
//     componentWillUnmount() {
//         this.$el.off('change', this.handleChange);
//         // this.$el.chosen('destroy');
//     }
// 
//     handleChange(e) {
//         this.props.onChange(e.target.value);
//     }
// 
//     render() {
//         return (
//             <div>
//                 <select className="Chosen-select" ref={el => this.el = el}>
//                     {this.props.children}
//                 </select>
//             </div>
//         );
//     }
// }
// 
// function Example() {
//     return (
//         <Chosen onChange={value => console.log(value)}>
//             <option>vanilla</option>
//             <option>chocolate</option>
//             <option>strawberry</option>
//         </Chosen>
//     );
// }
// 
// ReactDOM.render(
//     <Example />,
//     document.getElementById('app')
// );



/**
 * @desc Replacing String-Based Rendering with React.
 */
/* jquery */
// $('#container').html('<button id="btn">Say Hello</button>');
// $('#btn').click(function() {
//     alert('Hello!');
// });

/* react + jquery */
// function Button() {
//     return <button id="btn">Say Hello</button>;
// }
// 
// ReactDOM.render(
//     <Button />,
//     document.getElementById('app'),
//     function() {
//         $('#btn').click(function() {
//             alert('Hello!');
//         });
//     }
// );

/* react + jquery */
// function Button(props) {
//     return <button onClick={props.onClick}>Say Hello</button>;
// }
// 
// function HelloButton() {
//     function handleClick() {
//         alert('Hello!');
//     }
//     return <Button onClick={handleClick} />;
// }
// 
// ReactDOM.render(
//     <HelloButton />,
//     document.getElementById('app')
// );



/**
 * @desc Using Backbone Models in React Components
 */






/*---------- ADVANCED GUIDES - Accessibility ----------*/

/**
 * @desc
 */






/*---------- REFERENCE - React ----------*/

/*------ Components ------*/

/**
 * @desc React.Component: 创建组件.
 * @note is the base class for React components when they are defined using ES6 classes.
 */

/* 实例 */
// class Greeting extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// 
// ReactDOM.render(
//     <Greeting name="Long" />,
//     document.getElementById('app')
// );



/**
 * @desc React.PureComponent: 创建纯组件
 */

/* 实例 */
// class Greeting extends React.PureComponent {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// 
// ReactDOM.render(
//     <Greeting name="Long" />,
//     document.getElementById('app')
// );



/*------ Creating React Elements ------*/

/**
 * @desc createElement(): 使用非JSX创建元素
 */

/* 语法 */
// React.createElement(
//     type,
//     [props],
//     [...children]
// )
//
// type: div、span or react component.
// props: element props.
// chidlren: children element.

/* 实例1 */
// ReactDOM.render(
//     React.createElement('div', {className: 'header'}, 'header'),
//     document.getElementById('app')
// );

/* 实例2 */
// class Header extends React.Component {
//     render() {
//         return <div>{this.props.title}</div>;
//     }
// }
// 
// ReactDOM.render(
//     React.createElement(Header, {title: 'header-1'}, null),
//     document.getElementById('app')
// );



/**
 * @desc createFactory(): 使用工厂类创建元素.
 */
// let factory = React.createFactory("li");
// let child1 = factory(null, 'First Text Content');
// let child2 = factory({className: 'type'}, 'Second Text Content');
// let ulfactory = React.createFactory('ul');
// let root  = ulfactory({className:'my-list'}, child1, child2);
// ReactDOM.render(
//     root,
//     document.getElementById('app')
// );



/*------ Transforming Elements ------*/

/**
 * @desc cloneElement(): 
 */
// class Hello extends React.Component {
//     componentDidMount() {
//         console.log(this.span.innerHTML);
//     }
// 
//     render() {
//         var span = <span data-title="1" ref={el => this.span = el}>VaJoy</span>;
//         console.log(span.props);
// 
//         var newSpan = React.cloneElement(span, {'data-type':'2'}, <em>CNBlog</em>);
//         console.log(newSpan.props);
// 
//         return <div>Hello {span},{newSpan}</div>; // Hello VaJoy,CNBlog
//     }
// }
// 
// ReactDOM.render(
//     <Hello />,
//     document.getElementById('app')
// );

// class Li extends React.Component {
//     render() {
//         return <li data-type="1">{this.props.i}</li>;
//     }
// }
// 
// class Ul extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         //func.
//         this.deal = this.deal.bind(this);
//     }
// 
//     deal(child, index) {
//         // 注意下面这行换成 createElement 会报错！因为child是ReactElement而不是ReactClass或字符串
//         return React.cloneElement(child, {i: index, key: index});
//     }
// 
//     render() {
//         return <ul>{this.props.children.map(this.deal)}</ul>;
//     }
// }
// 
// ReactDOM.render((
//         <Ul>
//             <Li i="9" />
//             <Li i="8" />
//             <Li i="7" />
//         </Ul>
//     ),
//     document.getElementById('app')
// );


/**
 * @desc isValidElement(): 是否是一个有效的元素. 
 */
// console.log(React.isValidElement({}));
// 
// let ele = <div>1</div>;
// console.log(React.isValidElement(ele));
// 
// class Test extends React.Component {
//     render() {
//         return <div>teset</div>;
//     }
// }
// console.log(React.isValidElement(<Test />));



/**
 * @desc React.Children.
 */
// console.log(React.Children);
// count: function countChildren(children, context)
// forEach: function forEachChildren(children, forEachFunc, forEachContext)
// map: function mapChildren(children, func, context)
// only: function onlyChild(children)
// toArray: function toArray(children)



/**
 * @desc React.Children.count().
 */
// class Test extends React.Component {
//     render() {
//         let count = React.Children.count(this.props.children);
// 
//         return(
//             <div>
//                 <div>count: {count}</div>
//                 <div>children: {this.props.children}</div>
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Test>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//         <div>6</div>
//     </Test>,
//     document.getElementById('app')
// );
// 
// console.log(React.Children.count([1,2,3]));
// console.log(React.Children.count(<div><div>1</div><div>2</div></div>));



/**
 * @desc React.Children.map().
 */
// class Test extends React.Component {
//     render() {
//         let i = 0;
//         let map = React.Children.map(this.props.children, (item) => {
//             // console.log(item);
//             return <h1 key={'h1_' + i++}>{item}</h1>;
//         });
// 
//         i = 0;
//         let map1 = this.props.children.map(item => {
//             // console.log(item);
//             return <h2 key={'h2_' + i++}>{item}</h2>;
//         });
// 
//         i = 0;
//         let map2 = [1, 2, 3].map(item => {
//             return <h3 key={'h3_' + i++}>{item}</h3>;
//         });
// 
//         return(
//             <div>
//                 <div>map: {map}</div>
//                 <div>map1: {map1}</div>
//                 <div>map2: {map2}</div>
//                 <div>children: {this.props.children}</div>
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Test>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//         <div>6</div>
//     </Test>,
//     document.getElementById('app')
// );



/**
 * @desc React.Children.forEach().
 */
// class Test extends React.Component {
//     render() {
//         let i = 0;
//         let forEach = [];
//         React.Children.forEach(this.props.children, (item) => {
//             forEach.push(<h1 key={'h1_' + i++}>{item}</h1>);
//         });
// 
//         i = 0;
//         let forEach1 = []; 
//         this.props.children.forEach(item => {
//             forEach1.push(<h2 key={'h2_' + i++}>{item}</h2>);
//         });
// 
//         i = 0;
//         let forEach2 = [];
//         [1, 2, 3].forEach(item => {
//             forEach2.push(<h3 key={'h3_' + i++}>{item}</h3>);
//         });
// 
//         return(
//             <div>
//                 <div>forEach: {forEach}</div>
//                 <div>forEach1: {forEach1}</div>
//                 <div>forEach2: {forEach2}</div>
//                 <div>children: {this.props.children}</div>
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Test>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//         <div>6</div>
//     </Test>,
//     document.getElementById('app')
// );



/**
 * @desc React.Children.only().
 */
// class Test extends React.Component {
//     render() {
//         // 如果不是只有一个元素则跑出异常，否则返回元素本身.
//         console.log(React.Children.only(this.props.children));
// 
//         return(
//             <div>
//                 <div>children: {this.props.children}</div>
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Test>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//         <div>6</div>
//     </Test>,
//     document.getElementById('app')
// );




/**
 * @desc React.Children.toArray().
 */
// class Test extends React.Component {
//     render() {
//         // 使用React.Children.toArray方法将this.props.children转化成标准的数组格式，然后在进行遍历操作.
//         console.log(React.Children.toArray(this.props.children));
//         console.log(React.Children.toArray([1, 2, 3]));
// 
//         return(
//             <div>
//                 <div>children: {this.props.children}</div>
//             </div>
//         );
//     }
// }
// 
// ReactDOM.render(
//     <Test>
//         <div>1</div>
//         <div>2</div>
//         <div>3</div>
//         <div>4</div>
//         <div>5</div>
//         <div>6</div>
//     </Test>,
//     document.getElementById('app')
// );






/*---------- REFERENCE - React.Component ----------*/

/*------ React.Component ------*/
// 至少包含一个render方法.
// 如果不喜欢使用ES6, 你可以使用create-react-class，具体的看->React Without ES6.

/* 实例 */
// class Greeting extends React.Component {
//     render() {
//         return <h1>Hello, {this.props.name}</h1>;
//     }
// }
// 
// ReactDOM.render(
//     <Greeting name="Long" />,
//     document.getElementById('app')
// );



/*------ Component Lifecycle ------*/
/* 概述: */
// 每个组件都有自己的生命周期方法, 只是在不同的时间执行.

/* 名词解释 */
//   will: 在进入状态之前调用.
//   did:  在进入状态之后调用.



/*--- 组件执行分为如下阶段: ---*/
/*- [Mounting(已插入真实DOM)]: 当一个组件的一个实例被创建和插入到DOM中会执行下面这些方法 -*/

/* constructor(): 构造函数. */
// 概述:
//   constructor(props)
//   1) constructor在mount之前被调用.
//   2) 在其他声明之前调用super(props), 否则this.props将定义在constructor中, 这可能导致bugs.
//   3) 在constructor中初始化state是正确的做法, 如果你不初始化state也不绑定方法就不需要使用构造函数了.
//   4) If you "fork" props by using them for state, you might also want to implement componentWillReceiveProps(nextProps) to keep the state up-to-date with them.
//      But lifting state up is often easier and less bug-prone

// 实例.
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {
//             title: props.name
//         };
// 
//         // func.
//         this.handleClick = this.handleClick.bind(this);
//     }
// 
//     handleClick(event) {
//         console.log('你点了我一下^_^');
//     }
// 
//     render() {
//         return <div onClick={this.handleClick}>{this.state.title} click me !</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Test name="please" />,
//     document.getElementById('app')
// );



/* componentWillMount(): 插入真实DOM之前. */
// 概述:
//   1) 在插入真实DOM之前调用.
//   2) 在render之前被调用.
//   3) 在这个方法里设置state同步不会调用render.

// 实例.
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         console.log('constructor');
//     }
// 
//     componentWillMount() {
//         console.log('componentWillMount');
//     }
// 
//     render() {
//         console.log('render');
//         return <div>hi!</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Test />,
//     document.getElementById('app')
// );



/* render(): 渲染. */
// 概述: 
//   1) 每个组件都需要要有render方法. 当被调用时应该检查this.props和this.state并返回一个React元素.
//   2) 你可以返回null或false表示不想要任何呈现. 当返回null或false, ReactDOM.findDOMNode(this)将返回null.
//   3) 如果shouldComponentUpdate()返回false, 则不会调用render().

// 实例.
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {title: '你好'};
//     }
// 
//     componentDidMount() {
//         this.setState({title: '真的很好'});
//     }
// 
//     shouldComponentUpdate() {
//         return false; // 如果返回false, componentDidMount中的setState会修改状态，但是不会触发render.
//     }
// 
//     render() {
//         return <div>{this.state.title} - {this.props.name}</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Test name="Long" />,
//     document.getElementById('app')
// );



/* componentDidMount(): 插入真实DOM之后. */
// 概述:
//   1) 插入真实DOM之后调用.
//   2) 应该在这里初始化DOM节点.
//   3) 如果你需要加载远程数据或者改变state可以放在这里, state改变会调用render.

// 实例.
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {
//             title: props.name
//         }
// 
//         console.log('constructor');
//     }
// 
//     componentDidMount() {
//         console.log(this.state.title);
// 
//         // update state.
//         this.setState({
//             title: 'componentDidMount update'
//         });
// 
//         console.log('componentDidMount');
//     }
// 
//     render() {
//         console.log('render');
//         return <div>hi {this.state.title}!</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Test name="componentDidMount" />,
//     document.getElementById('app')
// );



/*- [Updating(正在被重新渲染)]: 当更新props或state后组件会被重新渲染, 会执行下面这些方法 -*/

/* componentWillReceiveProps(): 接收属性. */
// 概述:
//   1) 设置state通常不触发componentWillReceiveProps.

// 实例:
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {
//             cnt: props.cnt
//         };
//     }
// 
//     componentWillReceiveProps(nextProps) {
//         consooe.log(this.props); // 当前props.
//         console.log(nextProps);  // 新props.
//     }
// 
//     render() {
//         return <div>{this.state.cnt}</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Test cnt="1" />,
//     document.getElementById('app')
// );



/* shouldComponentUpdate(): 组件需要进行更新. */
// 概述: 
//   shouldComponentUpdate(nextProps, nextState)
//   1) 人工干涉是否调用render.
//   2) 返回true则调用render, 返回false则不调用render.
//   3) 返回false并不阻止子组件状态改变时重新render.

// 实例.
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
// 
//         // state.
//         this.state = {
//             cnt: props.zcnt
//         }
//     }
// 
//     componentDidMount() {
//         this.setState({
//             cnt: 6
//         });
//     }
// 
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log(this.props);
//         console.log(nextProps);
//         console.log(this.state);
//         console.log(nextState);
// 
//         if (this.state.cnt != nextState.cnt) {
//             console.log(this.state.cnt, nextState.cnt);
//             return true;
//         } else {
//             return false;
//         }
//     }
// 
//     render() {
//         return <div>{this.state.cnt}</div>;
//     }
// }
// 
// ReactDOM.render(
//     <Test zcnt="1" />,
//     document.getElementById('app')
// );



/* componentWillUpdate(): . */

/* render(): . */

/* componentDidUpdate(): . */



/*- [Unmounting(已移出真实 DOM)]: 当一个组件从DOM中删除时, 会执行下面这些方法 -*/

/* componentWillUnmount(): . */




/*- [Other APIs]: 每个组件还提供了如下Api -*/

/* setState(): . */

/* forceUpdate(): . */




/*- [Class Properties] -*/

/* defaultProps: . */

/* displayName: . */




/*- [Instance Properties] -*/

/* props: . */

/* state: . */





























/* 常量调用 */
console.log(process.env.NODE_ENV);
console.log(__PROD__);
