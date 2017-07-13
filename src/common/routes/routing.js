import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Todo from '../components/Todo';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/home" component={Home} />
		<Route path="/todo" components={Todo} />
	</Route>
);
