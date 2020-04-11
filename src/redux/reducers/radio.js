export const radio = (state = 'normal', action) => {
    switch (action.type) {
        case 'RADIO':
            return action.payload;

        default:
            return state;
    }
};
