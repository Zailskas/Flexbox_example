import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomTextInput from '../components/textInput';
import CustomButton from '../components/customButton';
import {connect} from 'react-redux';
import {createTable, dropTable, createUserTable} from '../helper/db';

class LoginPage extends Component {

  componentDidMount() {
    createTable();
    createUserTable();
  }

  render() {
    return (
      <SafeAreaView>
        <CustomTextInput
          title="Username"
          
          placeholder="Enter your username"
          
        />
        <CustomTextInput
          title="Password"
          
          placeholder="Enter your password"
          
          secureTextEntry={true}
        />
        <CustomButton title="Login"  />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register_page')}>
          <Text>No account? Create one !!!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default (LoginPage);
