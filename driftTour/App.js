import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainMenu from './src/mainMenu';
import tourList from './src/tourList';
import tourPhotos from './src/tourPhotos';
import tabList from './src/tabList';
import axios from 'axios';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

class TabHome extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    axios
      .get('https://my-json-server.typicode.com/Zailskas/driftSeasonAPI/season')
      .then((res) => {
        const Data = res.data;
        this.setState({
          data: Data,
        });
      });
  };
  render() {
    const page = this.state.data.map(item => {
      return (
        <Tab.Screen name={item.tour} component={tabList} key={item.tourID} />
      )
    })
    if(this.state.data.length===0)
       return null;
    return (
      <Tab.Navigator>
        {page}
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
