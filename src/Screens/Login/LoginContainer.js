import { connect } from 'react-redux';

import LoginScreen from './LoginScreen';
import {
    clearError,
    login,
} from './LoginState';

export default connect(
    state => ({
        currentRequest: state.getIn(['login', 'currentRequest']),
        loading: state.getIn(['login', 'loading']),
        success: state.getIn(['login', 'success']),
        error: state.getIn(['login', 'error']),
        errorMessage: state.getIn(['login', 'errorMessage']),
        completed: state.getIn(['login', 'completed'])
    }),
    {
        clearError,
        login,
    }
)(LoginScreen);