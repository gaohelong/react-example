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



/* 常量调用 */
console.log(process.env.NODE_ENV);
console.log(__PROD__);
