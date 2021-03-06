import { clearWork } from './work';

export const addWorks = (name, status) => {
    return async (dispatch, getState) => {
        const works = [...getState().works];
        const work = {
            id: Math.floor(Math.random() * 1000),
            name,
            status,
        };

        if (work.name.trim() !== '') {
            works.push(work);
            await dispatch({ type: 'ADD_WORK', payload: works });
            await dispatch(clearWork());
        }
    };
};

export const deleteWork = (workId) => {
    return async (dispatch, getState) => {
        const works = [...getState().works];
        const filterdWorks = works.filter((p) => p.id !== workId);
        await dispatch({ type: 'DELETE_WORK', payload: filterdWorks });
    };
};

export const updateWork = (event, workId) => {
    return async (dispatch, getState) => {
        const allWorks = [...getState().works];
        const workIndex = allWorks.findIndex((p) => p.id === workId);
        const work = allWorks[workIndex];
        work.name = event.target.value;
        const works = [...allWorks];
        works[workIndex] = work;
        await dispatch({ type: 'UPDATE_WORK', payload: works });
    };
};
