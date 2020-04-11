import { showEvent } from './showEvent';
import { work } from './work';
import { workReducer } from './works';
import { combineReducers } from 'redux';
import { radio } from './radio';
export const reducers = combineReducers({
    showEvent,
    work,
    radio,
    works: workReducer,
});
