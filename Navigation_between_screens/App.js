/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import firstStackPage from './src/firstStackPage';
import secondStackPage from './src/secondStackPage';
import thirdStackPage from './src/thirdStackPage';
import firstTabPage from './src/firstTabPage';
import secondTabPage from './src/secondTabPage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class TabHome extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="firstTabPage" component={firstTabPage}/>
        <Tab.Screen name="secondTabPage" component={secondTabPage}/>
      </Tab.Navigator>
    )
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="firstStackPage" >
          <Stack.Screen name="firstStackPage" component={firstStackPage}/>
          <Stack.Screen name="secondStackPage" component={secondStackPage}/>
          <Stack.Screen name="thirdStackPage" component={TabHome}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
