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

export function setTodo(todo) {
	return {
		type: actionTypes.SET_TODO,
		payload: { todo }
	};
}

export function setFindTodoId(id) {
	return {
		type: actionTypes.SET_FIND_TODO_ID,
		payload: { find: { id } }
	};
}

export function setDeleteTodoId(id) {
	return {
		type: actionTypes.SET_DELETE_TODO_ID,
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

export function setShouldNotGetTodoOnMount(flag) {
	return {
		type: actionTypes.SET_SHOULD_NOT_GET_TODO_ON_MOUNT,
		payload: { shouldNotGetTodoOnMount: flag }
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
				dispatch(setTodo(createEmptyTodo()));
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

export function getTodoFromLink(id) {
	return dispatch => {
		dispatch(setLoadingMessage('retrieving ...'));
		dispatch(setShouldNotGetTodoOnMount(true));
		getRepository()
			.todos('getTodo', { get: { id } })
			.then(todo => {
				dispatch(setLoadingMessage());
				dispatch(setTodo(todo));
				dispatch(addToLog(`Found todo item ${todo.id}\n`));
				dispatch(setShouldNotGetTodoOnMount(false));
			})
			.catch(err => {
				dispatch(setLoadingMessage());
				dispatch(setTodo(createEmptyTodo()));
				dispatch(addToLog(`Could not get todo item ${id}. Reason: ${err}\n`));
			});
	};
}

function createEmptyTodo() {
	return {
		ID: '',
		TODO: '',
		when: '',
		author: ''
	};
}
