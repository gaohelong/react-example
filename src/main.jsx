/* react */
// import React, {Component, PropTypes} from 'react';
import React from 'react';
// import ReactDOM, {render} from 'react-dom';
import ReactDOM from 'react-dom';

/* sass */
require('./sass/main');
require('./sass/modules/main/main');

/*** 编译后，JSX表达成为JavaScript对象 ***/

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
import avatar from './assets/images/global/boss_22x22.png'; // 导入图片.
const element1 = <div tabIndex="0">tabIndex attr</div>;
const element2 = (
    <img src={avatar} />
);

let element = (
    <div>
        {element1}
        {element2}
    </div>
);

ReactDOM.render(
    element, document.getElementById('app')
);



/* 常量调用 */
console.log(process.env.NODE_ENV);
console.log(__PROD__);
