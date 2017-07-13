let savedNumber = -154;

function addTodo({ todo }) {
	return new Promise((resolve, reject) => {
		// TODO: call Todo API to add TODO object
		resolve();
	});
}

function saveNumber({ number }) {
	return new Promise((resolve, reject) => {
		savedNumber = number;
		resolve();
	});
}

function loadNumber() {
	return new Promise((resolve, reject) => {
		resolve(savedNumber);
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
