/* react */
import React from 'react';
import ReactDOM from 'react-dom';

/* sass */
import './sass/main';
import './sass/modules/main/main';

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
import Redirects from './router/Redirects';
ReactDOM.render(
    <Redirects />,
    document.getElementById('app')
);
