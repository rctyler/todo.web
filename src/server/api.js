import express from 'express';
import { getRepository } from '../common/utils/repository';

const app = express();

app.post('/todo', (req, res) => {
	const todo = {
		TODO: req.body.TODO,
		when: req.body.when,
		author: req.body.author
	};

	getRepository()
		.numbers('addTodo', { todo })
		.then(value => {
			res.status(200).send(value);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

export default app;
