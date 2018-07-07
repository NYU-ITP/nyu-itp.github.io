import React from 'react';
import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
// import reducers from './reducers';

// const store = createStore(() => [], {}, applyMiddleware());

ReactDom.render(
<App />,
document.querySelector('#root'));