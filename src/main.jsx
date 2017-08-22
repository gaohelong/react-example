/* react */
import React from 'react';
import ReactDOM from 'react-dom';

/* sass */
import './sass/main';
// import './sass/modules/main/main';

/**
 * @desc BasicExample.
 */
// import BasicExample from './router/BasicExample';
// ReactDOM.render(
//     <BasicExample />,
//     document.getElementById('app')
// );

/**
 * @desc ParamsExample.
 */
// import ParamsExample from './router/ParamsExample';
// ReactDOM.render(
//     <ParamsExample />,
//     document.getElementById('app')
// );

/**
 * @desc Redirects(Auth).
 */
// import Redirects from './router/Redirects';
// ReactDOM.render(
//     <Redirects />,
//     document.getElementById('app')
// );

/**
 * @desc CustomLinkExample.
 */
// import CustomLinkExample from './router/CustomLinkExample';
// ReactDOM.render(
//     <CustomLinkExample />,
//     document.getElementById('app')
// );

/**
 * @desc PreventingTransitionsExample.
 */
// import PreventingTransitionsExample from './router/PreventingTransitionsExample';
// ReactDOM.render(
//     <PreventingTransitionsExample />,
//     document.getElementById('app')
// );

/**
 * @desc NoMatchExample.
 */
// import NoMatchExample from './router/NoMatchExample';
// ReactDOM.render(
//     <NoMatchExample />,
//     document.getElementById('app')
// );

/**
 * @desc RecursiveExample.
 */
// import RecursiveExample from './router/RecursiveExample';
// ReactDOM.render(
//     <RecursiveExample />,
//     document.getElementById('app')
// );

/**
 * @desc SidebarExample.
 */
// import SidebarExample from './router/SidebarExample';
// ReactDOM.render(
//     <SidebarExample />,
//     document.getElementById('app')
// );

/**
 * @desc AnimationExample.
 */
// import AnimationExample from './router/AnimationExample';
// ReactDOM.render(
//     <AnimationExample />,
//     document.getElementById('app')
// );

/**
 * @desc AmbiguousExample.
 */
// import AmbiguousExample from './router/AmbiguousExample';
// ReactDOM.render(
//     <AmbiguousExample />,
//     document.getElementById('app')
// );

/**
 * @desc RouteConfigExample.
 */
// import RouteConfigExample from './router/RouteConfigExample';
// ReactDOM.render(
//     <RouteConfigExample />,
//     document.getElementById('app')
// );

/**
 * @desc ModalGallery.
 */
// import ModalGallery from './router/ModalGallery';
// ReactDOM.render(
//     <ModalGallery />,
//     document.getElementById('app')
// );

/**
 * @desc StaticRouterExample.
 */
// import StaticRouterExample from './router/StaticRouterExample';
// ReactDOM.render(
//     <StaticRouterExample />,
//     document.getElementById('app')
// );

/**
 * @desc CodeSplitting.
 */
// import CodeSplitting from './router/CodeSplitting';
// ReactDOM.render(
//     <CodeSplitting />,
//     document.getElementById('app')
// );

/**
 * @desc react-redux example.
 */
// import {Provider} from 'react-redux';
// import App from './router/Blog';
// import store from './redux/Store/Blog/store';
// 
// store.subscribe(() => { // 监听state变化.
//     // console.log('getState', store.getState());
// });
// 
// let rootEle = document.getElementById('app');
// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     rootEle
// );

/**
 * @desc admin example.
 */
import './sass/modules/admin/public';
import { Provider } from 'react-redux';
import App from './router/Admin';
import store from './redux/Store/Admin/store';

store.subscribe(() => { // 监听state变化.
    console.log('getStore:', store.getState());
});

let rootEle = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEle
);
