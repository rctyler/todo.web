import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { render } from 'react-dom';
import { Router, Route, RouterContext, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import combinedReducers from '../common/reducers';
import routes from '../common/routes/routing';
import thunk from 'redux-thunk';

import { createRepository } from '../common/utils/repository';
import todoStrategy from './strategies/todos';

createRepository({
	todos: todoStrategy
});

let state = null;

if (window.$REDUX_STATE) {
	// TODO: create immutable objects here
	state = window.$REDUX_STATE;
}

const store = createStore(combinedReducers, state, applyMiddleware(thunk));

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.querySelector( '#app' )
);
