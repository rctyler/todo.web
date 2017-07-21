import actionTypes from '../constants/actionTypes';

function setAddMessage(state, action) {
	let newState = { ...state };

	newState.add.message = action.payload.message;

	return newState;
}

function setAddWhen(state, action) {
	let newState = { ...state };

	newState.add.when = action.payload.when;

	return newState;
}

function setAddAuthor(state, action) {
	let newState = { ...state };

	newState.add.author = action.payload.author;

	return newState;
}

function setTodo(state, action) {
	let newState = { ...state };

	if (action.payload.todo) {
		newState.todo = {};
		newState.todo.id = action.payload.todo.id;
		newState.todo.message = action.payload.todo.TODO;
		newState.todo.when = action.payload.todo.when;
		newState.todo.author = action.payload.todo.author;
	} else {
		newState.todo = null;
	}

	return newState;
}

function setGetId(state, action) {
	let newState = { ...state };

	newState.get.id = action.payload.get.id;

	return newState;
}

function setDeleteId(state, action) {
	let newState = { ...state };

	newState.delete.id = action.payload.delete.id;

	return newState;
}

function setLoadingMessage(state, action) {
	let newState = { ...state };

	newState.loadingMessage = action.payload.loadingMessage;

	return newState;
}

function addToLog(state, action) {
	let newState = { ...state };

	if (!newState.log) {
		newState.log = '';
	}

	newState.log += `${new Date().toISOString()} - ${action.payload.log}\n`;

	return newState;
}

export default function (state = { add: {}, get: {}, delete: {} }, action) {
	switch (action.type) {
		case actionTypes.SET_ADD_MESSAGE:
			return setAddMessage(state, action);
		case actionTypes.SET_ADD_WHEN:
			return setAddWhen(state, action);
		case actionTypes.SET_ADD_AUTHOR:
			return setAddAuthor(state, action);
		case actionTypes.SET_TODO:
			return setTodo(state, action);
		case actionTypes.SET_GET_ID:
			return setGetId(state, action);
		case actionTypes.SET_DELETE_ID:
			return setDeleteId(state, action);
		case actionTypes.SET_LOADING_MESSAGE:
			return setLoadingMessage(state, action);
		case actionTypes.ADD_TO_LOG:
			return addToLog(state, action);
		default:
			return state;
	}
}
