import request from '../request';

function saveNumber({ number }) {
	return new Promise((resolve, reject) => {
		request
			.put('/api/number')
			.send({ number })
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
	});
}

function loadNumber() {
	return new Promise((resolve, reject) => {
		request
			.get('/api/number')
			.end((err, res) => {
				if (err) {
					reject(err);
				} else {
					resolve(res.body.number);
				}
			});
	});
}

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
		case 'save':
			return saveNumber(values);
		case 'load':
			return loadNumber(values);
	}
}
