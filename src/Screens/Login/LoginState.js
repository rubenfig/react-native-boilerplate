import { Map } from 'immutable';
//import 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import LoginController from "../../Controllers/LoginController";
import {makeActionCreator} from "../../Util/ActionHelpers";

/*  Action definitions */

const CLEAR_ERROR = 'CLEAR_ERROR';
const LOGIN = 'LOGIN';
const LOGIN_DONE = 'LOGIN_DONE';
const LOGIN_ERROR = 'LOGIN_ERROR';

/* Actions */
export const clearError = makeActionCreator(CLEAR_ERROR);
export const login = makeActionCreator(LOGIN, 'username', 'password');
export const loginDone = makeActionCreator(
    LOGIN_DONE,
    'token'
);
export const loginError = makeActionCreator(LOGIN_ERROR, 'error');


const INITIAL_STATE = Map({
    currentRequest: null,
    loading: false,
    success: false,
    error: false, // request status
    errorMessage: null,
    completed: false
});


/* Reducers */
export const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLEAR_ERROR:
            return state.set('error', false).set('errorMessage', null);

        case LOGIN:
            return state
                .set('currentRequest', LOGIN)
                .set('loading', true)
                .set('success', false)
                .set('error', false)
                .set('errorMessage', null); //reset error

        case LOGIN_DONE:
            return state
                .set('loading', false)
                .set('success', true)
                .set('error', false)
                .set('token', action.token);


        case LOGIN_ERROR:

            return state
                .set('loading', false)
                .set('success', false)
                .set('error', true)
                .set('errorMessage', action.error);

        default:
            return state;
    }
};

/* Epics */
const loginEpic = action$ =>
    action$.ofType(LOGIN).mergeMap(action =>
        Observable.fromPromise(
            LoginController.login({
                username: action.username,
                password: action.password
            })
        )
            .map(response => {
                if (response.ok) {
                    return loginDone(response.data.token);
                } else {
                    return loginError(response.message);
                }
            })
            .catch(error => Observable.of(loginError(error)))
    );


export const loginEpics = [
    loginEpic
];