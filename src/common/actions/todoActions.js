import actionTypes from '../constants/actionTypes';
import { getRepository } from '../utils/repository';

export function setMessage(message) {
	return {
		type: actionTypes.SET_MESSAGE,
		payload: { message }
	};
}

export function setWhen(when) {
	return {
		type: actionTypes.SET_WHEN,
		payload: { when }
	};
}

export function setAuthor(author) {
	return {
		type: actionTypes.SET_AUTHOR,
		payload: { author }
	};
}

export function addTodo(message, when, author) {
	const todo = {
		TODO: message,
		when,
		author
	};

	return dispatch => {
		dispatch(setLoadingMessage('adding ...'));
		getRepository()
			.todos('addTodo', { todo })
			.then(todo => {
				dispatch(setLoadingMessage());
				dispatch(addToLog(`Added todo item ${todo.id}\n`));
			});
	};
}

export function addToLog(log) {
	return {
		type: actionTypes.ADD_TO_LOG,
		payload: { log }
	};
}

export function setLoadingMessage(loadingMessage) {
	return {
		type: actionTypes.SET_LOADING_MESSAGE,
		payload: { loadingMessage }
	};
}
