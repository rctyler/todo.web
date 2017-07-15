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

function setLoadingMessage(state, action) {
	let newState = { ...state };

	newState.loadingMessage = action.payload.loadingMessage;

	return newState;
}

function addToLog(state, action) {
	let newState = { ...state };

	newState.log += action.payload.log;

	return newState;
}

export default function (state = { log: '' }, action) {
	switch (action.type) {
		case actionTypes.SET_MESSAGE:
			return setMessage(state, action);
		case actionTypes.SET_WHEN:
			return setWhen(state, action);
		case actionTypes.SET_AUTHOR:
			return setAuthor(state, action);
		case actionTypes.SET_LOADING_MESSAGE:
			return setLoadingMessage(state, action);
		case actionTypes.ADD_TO_LOG:
			return addToLog(state, action);
		default:
			return state;
	}
}
