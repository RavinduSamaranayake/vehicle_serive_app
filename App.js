/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import React from 'react';
// //import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json
// import Login from  './app/components/Login'
// import Dashboard from  './app/components/Dashboard'
// import Splash from  './app/components/Splash'



// const RootStack = createStackNavigator(
//   {
//     splash:Splash,
//     login: Login,
//     dashboard: Dashboard,
//   },
//   {
//     initialRouteName: 'splash',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

//--------------------------------------------------------------------------------
// 

//------------------------------------------------------------


import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Login from  './app/screens/Login'
import Splash from  './app/screens/Splash'
import Home from  './app/tabs/Home'
import Settings from './app/tabs/Settings'
import Profile from './app/tabs/Profile'
 

/**
 * - AppSwitchNavigator
 *    - SplashScreen
 *    - Login Screen
 *    - Dashboard
 *    - AppDrawerNavigator
 *          - Dashboard - DashboardStackNavigator(needed for header and to change the header based on the                     tab)
 *            - DashboardTabNavigator
 *              - Tab 1 - Homestack
 *              - Tab 2 - ProfileStack
 *              - Tab 3 - SettingsStack
 *            - Any files you don't want to be a part of the Tab Navigator can go here.
 */

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

class App extends Component {
  render() {
    return <AppContainer />;
  }
}
export default App;

 
 

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Home,
    Profile,
    Settings
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
   
  {
    DashboardTabNavigator: DashboardTabNavigator

  },
  {
    defaultNavigationOptions: ({ navigation }) => {
          return {
           headerLeft: (
              <Icon
                style={{ paddingLeft: 10 }}
                onPress={() =>navigation.openDrawer()}
                name="md-menu"
                size={30}
              />
             // <HeaderButton onPress={() => navigate('settings')} />
            ),
 
          };
        } 

     
    }
   
  
   
);

const HomeStack = createStackNavigator(
  {
    home: { screen: Home },
    settings: { screen: Settings },
  },
  {
    navigationOptions: {
      drawerLabel: 'New Home',
      // drawerIcon: ({ tintColor }) => (
      //   <MaterialIcons
      //     name="move-to-inbox"
      //     size={24}
      //     style={{ color: tintColor }}
      //   />
      // ),
    },
  }
);

const SettingStack = createStackNavigator(
  {
  
     
      settings: { screen: Settings },
      home: { screen: Home },
    
  },
  {
    navigationOptions: {
      drawerLabel: 'Settings',
      // drawerIcon: ({ tintColor }) => (
      //   <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
      // ),
    },
  }
);

const AppDrawerNavigator = createDrawerNavigator({
   Dashboard: {
    screen: DashboardStackNavigator
   },
    
   home: {
      screen: HomeStack
    },
    settings: {
       
      screen: SettingStack
    },
  },

  {
    initialRouteName: 'Dashboard',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  
});

const AppSwitchNavigator = createSwitchNavigator({
  splash: { screen: Splash },
  login: { screen: Login },
  home: {screen: Home},
  settings: {screen: Settings},
  profile: {screen: Profile},
 // drawer: {screen: AppDrawerNavigator},
  Dashboard: { screen: AppDrawerNavigator },
  
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});