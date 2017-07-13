import request from 'superagent';

export default {
	get: uri => {
		return request.get(uri);
	},
	post: uri => {
		return request.post(uri);
	},
	put: uri => {
		return request.put(uri);
	},
	head: uri => {
		return request.head(uri);
	},
	del: uri => {
		return request.del(uri);
	},
	trace: uri => {
		return request.trace(uri);
	},
	connect: uri => {
		return request.connect(uri);
	},
};
