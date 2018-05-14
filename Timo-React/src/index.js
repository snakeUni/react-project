import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import route from './router/index';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'

const render = Component => {
    ReactDOM.render(
        <Provider store = {store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
}
render(route);
registerServiceWorker();
