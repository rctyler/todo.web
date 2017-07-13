import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import NumberManager from '../components/NumberManager';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/home" component={Home} />
		<Route path="/numbers" components={NumberManager} />
	</Route>
);
