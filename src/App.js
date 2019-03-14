import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import AppNavigator from './Util/AppNavigator';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    dispatch({
      type: NavigationActions.BACK,
      from: nav.routes[nav.index].routeName
    });

    return true;
  };

  render() {
    return (
        <AppNavigator />
    );
  }
}

export default connect(state => ({
  nav: state.get('nav').toJS()
}))(App);