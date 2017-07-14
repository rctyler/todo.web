import actionTypes from '../constants/actionTypes';

function setLoadingMessage(state, action) {
	let newState = { ...state };

	newState.loadingMessage = action.payload.loadingMessage;

	return newState;
}

export default function (state = { number: 1337 }, action) {
	switch (action.type) {
		case actionTypes.SET_LOADING_MESSAGE:
			return setLoadingMessage(state, action);
		default:
			return state;
	}
}
