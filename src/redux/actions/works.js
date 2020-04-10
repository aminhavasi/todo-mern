import { clearWork } from './work';

export const addWorks = (name) => {
    return async (dispatch, getState) => {
        const works = [...getState().works];
        const work = {
            id: Math.floor(Math.random() * 1000),
            name,
        };

        if (work.name.trim() !== '') {
            works.push(work);
            await dispatch({ type: 'ADD_WORK', payload: works });
            await dispatch(clearWork());
        }
    };
};