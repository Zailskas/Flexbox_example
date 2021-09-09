/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Example = (props) => {
  return (
    <View style={styles.example}>
      <Text>{props.reiksme}</Text>
    </View>
  )
}

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.sectionContainer, { backgroundColor: '#d3d3d3' }]}>
          <View style={styles.exampleContainer}></View>
          <View style={styles.exampleContainer}></View>
        </View>
        <View style={[styles.sectionContainer, { backgroundColor: '#b0c4de'}]}>
          <View style={[styles.exampleContainer, {alignSelf: 'flex-start'}]}></View>
          <View style={styles.exampleContainer}></View>
          <View style={[styles.exampleContainer, {alignSelf: 'center'}]}></View>
        </View>
      </SafeAreaView>        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    flexDirection: 'column' // collumn ir row 
  },
  exampleContainer: {
    backgroundColor: "#e0ffff",
    width: 100,
    height: 100,
    margin: 5,
  }, 
  sectionContainer: {
    flex: 1,
    justifyContent: "space-around",    //flex-start, flex-end, center, space-between, space-around ir space-evenly
    alignItems: "flex-end",   //flex-start, flex-end, center, stretch ir baseline
  }

});

export default App;
