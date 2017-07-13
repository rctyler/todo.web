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
				dispatch(setLoadingMessage());
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

export function setNumber(number) {
	return {
		type: actionTypes.SET_NUMBER,
		payload: { number }
	};
}

export function setLoadingMessage(message) {
	return {
		type: actionTypes.SET_LOADING_MESSAGE,
		payload: { message }
	};
}

export function increment() {
	return {
		type: actionTypes.INCREMENT_NUMBER
	};
}

export function decrement() {
	return {
		type: actionTypes.DECREMENT_NUMBER
	};
}

export function saveNumber(number) {
	return dispatch => {
		dispatch(setLoadingMessage('saving ...'));

		getRepository()
			.numbers('save', { number })
			.then(value => {
				dispatch(setLoadingMessage());
			});
	};
}

export function loadNumber() {
	return dispatch => {
		dispatch(setLoadingMessage('loading ...'));

		getRepository()
			.numbers('load')
			.then(value => {
				dispatch(setLoadingMessage());
				dispatch(setNumber(value));
			});
	};
}
