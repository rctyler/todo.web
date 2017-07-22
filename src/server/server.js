import fs from 'fs';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, RouterContext, match } from 'react-router';
import routes from '../common/routes/routing';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import combinedReducers from '../common/reducers';
import thunk from 'redux-thunk';
import { createRepository } from '../common/utils/repository';
import todoStrategy from './strategies/todos';
import api from './api';

createRepository({
	todos: todoStrategy
});

const app = express();

app.use(bodyParser.json());

app.use('/assets', express.static(path.join(__dirname, '../../src/client/assets')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use('/api', api);

// server rendering
app.use((req, res, next) => {

	if (!res.headersSent) {

		let initialState = {};
		const store = createStore(combinedReducers, initialState, applyMiddleware(thunk));

		// react-router
		match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {

			if (error) {
				return res.status(500).send(error.message);
			}

			if (redirectLocation) {
				return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
			}

			if (renderProps == null) {
				return res.status(404).send('Not found');
			}

			try {
				const initView = renderToString((
					<Provider store={store}>
						<RouterContext {...renderProps} />
					</Provider>
				));

				let state = JSON.stringify(store.getState());
				let page = renderFullPage(initView, state);

				return res.status(200).send(page);
			} catch (err) {
				res.end(err.message);
			}
		});
	}
});

function renderFullPage(html, initialState) {
	return `
<!doctype html>
<html lang="utf-8">
	<head>
		<title>TODO Web Application</title>
		<link rel="stylesheet" type="text/css" href="/assets/styles/todo.css">
		<meta name="viewport" content="width=device-width, initial-scale=0.95">
	</head>
	<body>
		<div id="app">${html}</div>
		<script>window.$REDUX_STATE = ${initialState}</script>
		<script src="/dist/bundle.js"></script>
	</body>
</html>
	`;
}

// example of handling 404 pages
app.get('*', function (req, res) {
	res.status(404).send('404 - Page Not Found');
});

// global error catcher, need four arguments
app.use((err, req, res, next) => {
	console.error('Error on request %s %s', req.method, req.url);
	console.error(err.stack);
	res.status(500).send('Server error');
});

process.on('uncaughtException', evt => {
	console.log('uncaughtException: ', evt);
});

app.listen(3000, function () {
	console.log('Listening on port 3000');
});
