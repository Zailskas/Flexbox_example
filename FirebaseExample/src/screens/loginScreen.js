import React, {Component} from 'react';
import {View, Text, Alert, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomTextInput from '../../components/textInput';
import CustomButton from '../../components/customButton';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  usernameChange(username) {
    this.setState({username});
  }
  passwordChange(password) {
    this.setState({password});
  }
  handleSubmit = () => {
    
    //if (this.props.message)
  };
  //this.props.navigation.navigate('PrivatePage')

  render() {
    return (
      <SafeAreaView>
        <CustomTextInput
          title="Username"
          value={this.state.username}
          placeholder="Enter your username"
          onChangeText={(text) => this.usernameChange(text)}
        />
        <CustomTextInput
          title="Password"
          value={this.state.password}
          placeholder="Enter your password"
          onChangeText={(text) => this.passwordChange(text)}
          secureTextEntry={true}
        />
        <CustomButton title="Login" onPress={() => this.handleSubmit()} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register_page')}>
          <Text>No account? Create one !!!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default LoginPage;
