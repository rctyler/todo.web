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
		.todos('addTodo', { todo })
		.then(value => {
			res.status(200).send(value);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

app.get('/todo/:id', (req, res) => {
	const id = req.params.id;

	getRepository()
		.todos('getTodo', { get: { id } })
		.then(value => {
			res.status(200).send(value);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

export default app;
