export const workReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_WORK':
            return [...action.payload];
        case 'DELETE_WORK':
            return [...action.payload];
        case 'UPDATE_WORK':
            return [...action.payload];
        default:
            return state;
    }
};
