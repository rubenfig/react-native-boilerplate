import AppNavigator from '../../Util/AppNavigator';
import { fromJS } from 'immutable';

const initialState = fromJS(
    AppNavigator.router.getStateForAction(
        AppNavigator.router.getActionForPathAndParams('Login')
    )
);

export default (state = initialState, action) => {

    let nextState = state.merge(
        AppNavigator.router.getStateForAction(action, state.toJS())
    );


    return nextState;
};