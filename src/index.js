import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import App from './containers/App';
import { searchRobots, requestRobots } from './reducer';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
const store = createStore( rootReducer, applyMiddleware(thunkMiddleware, logger) )

const rootElement = document.getElementById('root')
ReactDOM.render(
    // Provider API makes the store available to the App
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
    )

registerServiceWorker();
// ServiceWorker.unregister();