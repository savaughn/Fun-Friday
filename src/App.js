/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Provider } from 'react-redux';
import Navigator from './navigator/navigator';
import { getStore } from './state'

const store = getStore();

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
      super();
      this.state = {
          setup: '',
          punchline: ''
      };
  }

  render() {
      return (
          <Provider store={ store }>
              <Navigator />
          </Provider>
    );
  }
}
