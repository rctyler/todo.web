import request from '../request';

function addTodo({ todo }) {
	return new Promise((resolve, reject) => {
		request
			.post('/api/todo')
			.send(todo)
			.end((err, res) => {
				const todo = {
					id: res.body.id,
					TODO: res.body.TODO,
					when: res.body.when,
					author: res.body.author
				};

				if (err) {
					reject(err.response.text);
				} else {
					resolve(todo);
				}
			});
	});
}

function getTodo({ get }) {
	return new Promise((resolve, reject) => {
		request
			.get(`/api/todo/${get.id}`)
			.end((err, res) => {
				if (err) {
					reject(err.response.text);
				} else {
					const todo = {
						id: res.body.id,
						TODO: res.body.TODO,
						when: res.body.when,
						author: res.body.author
					};
					resolve(todo);
				}
			});
	});
}

function deleteTodo({ del }) {
	return new Promise((resolve, reject) => {
		request
			.del(`/api/todo/${del.id}`)
			.end((err, res) => {
				if (err) {
					reject(err.response.text);
				} else {
					resolve();
				}
			});
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
