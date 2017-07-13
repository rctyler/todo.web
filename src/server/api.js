import express from 'express';
import { getRepository } from '../common/utils/repository';

const app = express();

app.get('/number', (req, res) => {
	getRepository()
		.numbers('load')
		.then(value => {
			setTimeout(() => {
				res.send({ number: value });
			}, 750);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

app.put('/number', (req, res) => {
	const number = req.body.number;
	getRepository()
		.numbers('save', { number })
		.then(value => {
			setTimeout(() => {
				res.sendStatus(204);
			}, 750);
		})
		.catch(reason => {
			res.status(500).send({ reason });
		});
});

export default app;
