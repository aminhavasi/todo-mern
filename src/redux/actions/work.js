export const setWork = (event) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_WORK', payload: event.target.value });
    };
};

export const clearWork = () => {
    return async (dispatch) => {
        await dispatch({ type: 'CLEAR_WORK', payload: '' });
    };
};
export const radiobox = (status) => {
    return async (dispatch) => {
        await dispatch({ type: 'RADIO', payload: status });
    };
};
