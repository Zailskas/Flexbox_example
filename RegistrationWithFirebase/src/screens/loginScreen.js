import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
import CustomTextInput from '../../components/textInput';
import CustomButton from '../../components/customButton';
import auth from '@react-native-firebase/auth';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user: auth().currentUser
    };
  }
  usernameChange(username) {
    this.setState({ username });
  }
  passwordChange(password) {
    this.setState({ password });
  }
  handleSubmit = () => {
    console.log(this.state.user)
    //if (this.props.message)
  };
  signOut = () => {
    auth()
      .signOut() 
      .then(() => console.log('Sign out'))

  }
  handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => {
        console.log('Sign in');
        this.props.navigation.navigate('PrivatePage');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('Wrong email address!');
        }
        if (error.code === 'auth/wrong-password') {
          console.log('Wrong password!');
        }
        if (error.code === 'auth/user-not-found') {
          console.log('User not exist!');
        }
      })
  }
  componentDidMount () {
    if (auth().currentUser !== null){
      this.props.navigation.navigate('PrivatePage')
    }
    else {
      this.props.navigation.navigate('Login_page')
    }
    console.log(auth().currentUser)
  }
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
        <CustomButton title="Login" onPress={this.handleSignIn} />
        <CustomButton title="test" onPress={this.handleSubmit} />
        <CustomButton title="signOut" onPress={this.signOut} />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register_page')}>
          <Text>No account? Create one !!!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default LoginPage;
