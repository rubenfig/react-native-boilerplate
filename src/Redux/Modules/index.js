import { combineReducers } from 'redux-immutablejs';
import { combineEpics } from 'redux-observable';
import { loginReducer, loginEpics } from '../../Screens/Login/LoginState';




import nav from './Navigator';

const epics = [
    ...loginEpics,
];

const reducers = combineReducers({
    nav,
    login: loginReducer,
});

export const Epics = combineEpics(...epics);
export const Reducers = reducers;