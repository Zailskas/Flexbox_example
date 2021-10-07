import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainMenu from './src/mainMenu';
import tourList from './src/tourList';
import tourPhotos from './src/tourPhotos';
import tabMenu from './src/tabMenu';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class TabHome extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Tour" component={tabMenu}/>
      </Tab.Navigator>
    )
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen name="MainPage" component={mainMenu} />
          <Stack.Screen name="TourList" component={tourList} />
          <Stack.Screen name="TourPhotos" component={tourPhotos} />
          <Stack.Screen name="Tour" component={TabHome} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
