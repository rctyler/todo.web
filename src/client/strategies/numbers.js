import request from '../request';

function addTodo({ todo }) {
	return new Promise((resolve, reject) => {
		request
			.post('/api/todo')
			.send(todo)
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.body.number);
				}
			});
	});
}

export default function (name, values) {
	switch (name) {
		case 'addTodo':
			return addTodo(values);
	}
}
