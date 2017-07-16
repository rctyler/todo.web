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
					reject(err);
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
					reject(err);
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

export default function (name, values) {
	switch (name) {
		case 'addTodo':
			return addTodo(values);
		case 'getTodo':
			return getTodo(values);
	}
}
