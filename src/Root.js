import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { Root as NBRoot } from 'native-base';
import configureStore from './Redux/store.js';
import App from './App';

let store = configureStore();

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <NBRoot>
                    <App />
                </NBRoot>
            </Provider>
        );
    }
}

