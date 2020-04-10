export const show = () => {
    return async (dispatch) => {
        await dispatch({ type: 'SHOW_EVENTS' });
    };
};
