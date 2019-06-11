import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux'; //This is added for Redux
import { Provider } from 'react-redux'; //This is added for Redux to wrap around the components
import { reducer } from './reducer' //This is added for Redux

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //This is added for Redux, the window object is for the Redux Dev Tools

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root')); // Wrap the components(in this case App) in Provider tags with the store prop

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();