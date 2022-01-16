const reducer = (state, action) => {
	return state;
	if (action.type === "CLEAR_ALL") {
		return {
			...state,
			cart: [],
		};
	}
};

export default reducer;
