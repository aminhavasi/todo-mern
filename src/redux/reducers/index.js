import { showEvent } from './showEvent';
import { work } from './work';
import { workReducer } from './works';
import { combineReducers } from 'redux';
export const reducers = combineReducers({
    showEvent,
    work,
    works: workReducer,
});
