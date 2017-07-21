import actionTypes from '../constants/actionTypes';

function setMessage(state, action) {
	let newState = { ...state };

	newState.message = action.payload.message;

	return newState;
}

function setWhen(state, action) {
	let newState = { ...state };

	newState.when = action.payload.when;

	return newState;
}

function setAuthor(state, action) {
	let newState = { ...state };

	newState.author = action.payload.author;

	return newState;
}

function setTodo(state, action) {
	let newState = { ...state };

	newState.getTodoId = action.payload.todo.id;
	newState.getTodoMessage = action.payload.todo.TODO;
	newState.getTodoWhen = action.payload.todo.when;
	newState.getTodoAuthor = action.payload.todo.author;

	return newState;
}

function setFindTodoId(state, action) {
	let newState = { ...state };

	newState.findTodoId = action.payload.find.id;

	return newState;
}

function setDeleteTodoId(state, action) {
	let newState = { ...state };

	newState.deleteTodoId = action.payload.delete.id;

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

function setShouldNotGetTodoOnMount(state, action) {
	let newState = { ...state };

	newState.shouldNotGetTodoOnMount = action.payload.shouldNotGetTodoOnMount;

	return newState;
}

export default function (state = { }, action) {
	switch (action.type) {
		case actionTypes.SET_MESSAGE:
			return setMessage(state, action);
		case actionTypes.SET_WHEN:
			return setWhen(state, action);
		case actionTypes.SET_AUTHOR:
			return setAuthor(state, action);
		case actionTypes.SET_TODO:
			return setTodo(state, action);
		case actionTypes.SET_FIND_TODO_ID:
			return setFindTodoId(state, action);
		case actionTypes.SET_DELETE_TODO_ID:
			return setDeleteTodoId(state, action);
		case actionTypes.SET_LOADING_MESSAGE:
			return setLoadingMessage(state, action);
		case actionTypes.ADD_TO_LOG:
			return addToLog(state, action);
		case actionTypes.SET_SHOULD_NOT_GET_TODO_ON_MOUNT:
			return setShouldNotGetTodoOnMount(state, action);
		default:
			return state;
	}
}
