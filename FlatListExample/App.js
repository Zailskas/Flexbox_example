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
      firstnameValue: '',
      lastnameValue: '',
      firstname: '',
      lastname: '',
    }
  }
  insertValues = () => {
    this.setState({
      firstname: this.state.firstnameValue,
      lastname: this.state.lastnameValue,
    })
    this.setState({
      firstnameValue: '',
      lastnameValue: '',
    })
  }
  inputChangeFirstname(firstnameValue) {
    console.log('Input firstname: ', firstnameValue);
    this.setState({firstnameValue})
  }
  inputChangeLastname(lastnameValue) {
    console.log('Input lastname: ', lastnameValue);
    this.setState({lastnameValue})
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View >
        <View style={[styles.box, {borderBottomColor: 'black', borderBottomWidth: 2}]}>
          <Text>Test</Text>
          <TextInput
            style={{height: 40, borderColor: 'green', borderWidth: 1 }}
            placeholder="Firstname"
            value={this.state.firstnameValue}
            onChangeText = {(firstname) => this.inputChangeFirstname(firstname)}
          />
          <TextInput
            style={{height: 40, borderColor: 'green', borderWidth: 1 }}
            placeholder="Lastname"
            value={this.state.lastnameValue}
            onChangeText = {(lastname) => this.inputChangeLastname(lastname)}
          />
          <Button
            title='Insert'
            style={{padding: 10}}
            onPress={this.insertValues}
          />
        </View>
        <View style={styles.box}>
          <Text>{this.state.firstname}</Text>
          <Text>{this.state.lastname}</Text>
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
