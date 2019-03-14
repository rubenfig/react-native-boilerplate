import { compose, applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import Reactotron from './../Config/ReactotronConfig'
// import reducers & epics
import { Epics, Reducers } from './Modules';

const middleware = [];
const enhancers = [];


/* ---------------- Epic Middleware ----------------- */
const epicMiddleware = createEpicMiddleware();
middleware.push(epicMiddleware);

/* ---------------- Logger Middleware ----------------- */
if (__DEV__) {
    const logger = createLogger({
        stateTransformer: state => {
            if (Iterable.isIterable(state)) {
                return state.toJS();
            } else {
                return state;
            }
        }
    });

    middleware.push(logger);
}

/* ------------- Assemble Middleware ------------- */

enhancers.push(applyMiddleware(...middleware));

/* --------------- Reactotron & Create Store --------------------- */
let store;

if (__DEV__) {
    store = createStore(Reducers, compose(...enhancers, Reactotron.createEnhancer()));
} else {
    store = createStore(Reducers, compose(...enhancers));
}
epicMiddleware.run(Epics);

export default () => store;