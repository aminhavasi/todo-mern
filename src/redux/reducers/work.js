export const work = (state = '', action) => {
    switch (action.type) {
        case 'SET_WORK':
            return action.payload;
        case 'CLEAR_WORK':
            return action.payload;
        default:
            return state;
    }
};
