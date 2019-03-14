import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import getTheme from '../Themes/components';
import commonColor from '../Themes/variables/commonColor';

export default class NativeBaseStyleProvider extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(commonColor)}>
                {this.props.children}
            </StyleProvider>
        );
    }
}