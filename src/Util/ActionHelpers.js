import assign from 'lodash.assign';
import zipObject from 'lodash.zipobject';
import { NavigationActions } from 'react-navigation';

export const makeActionCreator = (type, ...keys) => (...vals) =>
    assign({ type }, zipObject(keys, vals));

export const isNavigationBack = ({ action, screenName }) => {
    const isBack = action.type === NavigationActions.BACK;

    if (!screenName) {
        return isBack;
    }

    return isBack && action.from === screenName;
};

export const isNavigationNavigate = ({ action, screenName }) => {
    const isNavigate = action.type === NavigationActions.NAVIGATE;

    if (!screenName) {
        return isNavigate;
    }

    return isNavigate && action.routeName === screenName;
};

export const isNavigationReset = ({ action }) => {
    const isReset = action.type === NavigationActions.RESET;

    return isReset;
};

export const resetAndGoTo = ({ routeName }) => {
    return {
        type: NavigationActions.RESET,
        index: 0,
        actions: [
            {
                type: NavigationActions.NAVIGATE,
                routeName: routeName
            }
        ]
    };
};

export const navigateToHomeScreenAction = () =>
    resetAndGoTo({
        routeName: 'Home'
    });