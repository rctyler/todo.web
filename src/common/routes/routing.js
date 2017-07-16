import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Home from '../components/Home';
import Todo from '../components/Todo';
import AddTodo from '../components/AddTodo';
import GetTodo from '../components/GetTodo';
import DeleteTodo from '../components/DeleteTodo';
import TodoManager from '../components/TodoManager';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/home" component={Home} />
		<Route path="/(todo\/add|todo\/get|todo\/delete)/" component={TodoManager}>
			<Route path="/todo/add" components={AddTodo} />
			<Route path="/todo/get" components={GetTodo}>
				<Route path="/todo/get/:id" components={Todo} />
			</Route>
			<Route path="/todo/delete" components={DeleteTodo} />
		</Route>
	</Route>
);
