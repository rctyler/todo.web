import express from 'express';
import { getRepository } from '../common/utils/repository';

const app = express();

app.post('/todo', (req, res) => {
	const todo = req.body.todo;
	getRepository()
		.numbers('addTodo', { todo })
		.then(value => {
			res.sendStatus(200);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

export default app;
