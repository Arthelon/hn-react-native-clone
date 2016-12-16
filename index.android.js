/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import App from './app/App';
import IndexContainer from './app/containers/index';

class HackernewsClone extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene 
            key="index" 
            component={IndexContainer}
            initial={true}
            title="Index"
          />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('hackernewsClone', () => HackernewsClone);
