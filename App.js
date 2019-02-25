/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
//import { Button, View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
import Login from  './app/components/Login'
import Dashboard from  './app/components/Dashboard'



const RootStack = createStackNavigator(
  {
    login: Login,
    dashboard: Dashboard,
  },
  {
    initialRouteName: 'login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
