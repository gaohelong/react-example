/* react */
import React from 'react';
import ReactDOM from 'react-dom';
import BasicExample from './router/BasicExample';

/* sass */
import './sass/main';
import './sass/modules/main/main';

ReactDOM.render(
    <BasicExample />,
    document.getElementById('app')
);
