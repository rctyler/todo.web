import actionTypes from '../constants/actionTypes';
import { getRepository } from '../utils/repository';

export function setAddMessage(message) {
	return {
		type: actionTypes.SET_ADD_MESSAGE,
		payload: { message }
	};
}

export function setAddWhen(when) {
	return {
		type: actionTypes.SET_ADD_WHEN,
		payload: { when }
	};
}

export function setAddAuthor(author) {
	return {
		type: actionTypes.SET_ADD_AUTHOR,
		payload: { author }
	};
}

export function setTodo(todo) {
	return {
		type: actionTypes.SET_TODO,
		payload: { todo }
	};
}

export function setGetId(id) {
	return {
		type: actionTypes.SET_GET_ID,
		payload: { get: { id } }
	};
}

export function setDeleteId(id) {
	return {
		type: actionTypes.SET_DELETE_ID,
		payload: { delete: { id } }
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
				dispatch(setTodo(todo));
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

export function getTodo(id) {
	return dispatch => {
		dispatch(setLoadingMessage('retrieving ...'));
		getRepository()
			.todos('getTodo', { get: { id } })
			.then(todo => {
				dispatch(setLoadingMessage());
				dispatch(setTodo(todo));
				dispatch(addToLog(`Found todo item ${todo.id}\n`));
			})
			.catch(err => {
				dispatch(setLoadingMessage());
				dispatch(setEmptyTodo());
				dispatch(addToLog(`Could not get todo item ${id}. Reason: ${err}\n`));
			});
	};
}

export function deleteTodo(id) {
	return dispatch => {
		dispatch(setLoadingMessage('deleting ...'));
		getRepository()
			.todos('deleteTodo', { del: { id } })
			.then(() => {
				dispatch(setLoadingMessage());
				dispatch(addToLog(`Deleted todo item ${id}\n`));
			})
			.catch(err => {
				dispatch(setLoadingMessage());
				dispatch(addToLog(`Could not delete todo item ${id}. Reason: ${err}\n`));
			});
	};
}

export function resetTodo() {
	return dispatch => {
		dispatch(setTodo(null));
	};
}
