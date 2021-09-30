/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class secondTabPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      teamname: null
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('Username')
      if (value !== null) {
        console.log('Paspaudziu', value)
        this.setState({
          name: value
        })
        console.log(this.state.name)
      }
    } catch (e) {
      console.log('neveikia')
    }
  }
  getObject = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('Object')
        const value = JSON.parse(jsonValue);
        console.log(value.name);
        this.state({
          name: value.name,
          teamname: value.teamname
        })
        return value
    } catch (error) {
        //error
    }
}
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>It is second Tab page</Text>
          <Text>{this.state.name} palaiko {this.state.teamname}</Text>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.getObject}>
            <Text>SHOW</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    alignItems: 'center',
    padding: 15,
    marginTop: 15,
    borderColor: 'green'
  }
})

export default secondTabPage;
