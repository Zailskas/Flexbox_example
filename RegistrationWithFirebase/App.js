/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import showScreen from './src/screens/showScreen';
import addScreen from './src/screens/addScreen';
import deleteScreen from './src/screens/deleteScreen';
import loginScreen from './src/screens/loginScreen';
import registerScreen from './src/screens/registerScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const PrivateContainer = () => {
  return (
    <Tab.Navigator
      initialRoute="SHOW"
      tabBarOptions={{ activeTintColor: '#deaf04' }}
    >
      <Tab.Screen
        name="SHOW"
        component={showScreen}
        options={{
          tabBarLabel: 'SHOW',
        }}
      />
      <Tab.Screen
        name="ADD"
        component={addScreen}
        options={{
          tabBarLabel: 'ADD',
        }}
      />
      <Tab.Screen
        name="DELETE"
        component={deleteScreen}
        options={{
          tabBarLabel: 'DELETE',
        }}
      />
    </Tab.Navigator>
  )
}


class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login_page">
          <Stack.Screen
            name="Login_page"
            component={loginScreen}
            options={{ title: 'Login page', headerShown: false }}
          />
          <Stack.Screen
            name="Register_page"
            component={registerScreen}
            options={{ title: 'Register page', headerShown: false }}
          />
          <Stack.Screen
            name="PrivatePage"
            component={PrivateContainer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
