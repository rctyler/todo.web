function addTodo({ todo }) {
	return new Promise((resolve, reject) => {
		todo.id = Math.floor((Math.random() * 10000) + 1);
		resolve(todo);
	});
}

export default function (name, values) {
	switch (name) {
		case 'addTodo':
			return addTodo(values);
	}
}
