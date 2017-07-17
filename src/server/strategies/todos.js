var todos = {};

function addTodo({ todo }) {
	return new Promise((resolve, reject) => {
		todo.id = Math.floor((Math.random() * 10000) + 1);
		todos[todo.id] = todo;
		resolve(todo);
	});
}

function getTodo({ get }) {
	return new Promise((resolve, reject) => {
		let todo = todos[get.id];
		if (todo) {
			resolve(todo);
		} else {
			reject(`todo ${get.id} not found`);
		}
	});
}

function deleteTodo({ del }) {
	return new Promise((resolve, reject) => {
		if (todos[del.id]) {
			delete todos[del.id];
			resolve();
		} else {
			reject(`todo ${del.id} not found`);
		}
	});
}

export default function (name, values) {
	switch (name) {
		case 'addTodo':
			return addTodo(values);
		case 'getTodo':
			return getTodo(values);
		case 'deleteTodo':
			return deleteTodo(values);
	}
}
