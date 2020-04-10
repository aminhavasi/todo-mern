export const showEvent = (state = true, action) => {
    switch (action.type) {
        case 'SHOW_EVENTS':
            return !state;
        default:
            return state;
    }
};
