/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput, Button, SafeAreaView
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      firstname: ''
    }
  }
  insertValues = () => {
    console.log(this.state.firstname)
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View >
        <View style={[styles.box, {borderBottomColor: 'black', borderBottomWidth: 2}]}>
          <Text>Test</Text>
          <TextInput
            style={{height: 30, borderColor: 'green', borderWidth: 1 }}
            placeholder="Firstname"
            onChangeText = {(firstname) => this.setState({firstname})}
          />
          <Button
            title='Insert'
            style={{padding: 10}}
          />
        </View>
        <View style={styles.box}>
          <Text>{this.state.firstname}</Text>
        </View>
      </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  box: {
    padding: 20,
    alignItems: 'center'
  }
});

export default App;
