import * as actionTypes from '../actions';

const initialState = {
	results: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({
					value: action.result,
					id: new Date()
				})
			}
		case actionTypes.DELETE_RESULT:
			const updatedArray = state.results.filter((result) => result.id !== action.id);
			return {
				...state,
				results: updatedArray
			}
		default:
			return state;
	}
};

export default reducer;
