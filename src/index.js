// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { NavBar, Home, SearchResult, Notfound } from './components/index';
import * as serviceWorker from './serviceWorker';
import { routes } from './routes/Routes';

const components = { NavBar, Home, SearchResult, Notfound };

ReactDOM.render(routes(components), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
