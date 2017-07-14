import actionTypes from '../constants/actionTypes';

import { getRepository } from '../utils/repository';

export function setTodoMessage(message) {
	return {
		type: actionTypes.SET_TODO_MESSAGE,
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

export function addTodo() {
	const todo = {};
	return dispatch => {
		dispatch(setLoadingMessage('adding ...'));
		getRepository()
			.numbers('addTodo', { todo })
			.then(value => {
				//dispatch(setLoadingMessage());
				dispatch(setTodo(value));
			});
	};
}

export function setTodo(todo) {
	return {
		type: actionTypes.SET_TODO,
		payload: { todo }
	};
}

export function setLoadingMessage(loadingMessage) {
	return {
		type: actionTypes.SET_LOADING_MESSAGE,
		payload: { loadingMessage }
	};
}
