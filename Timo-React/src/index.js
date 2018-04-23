import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/index';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    )
}
render(route);
registerServiceWorker();
