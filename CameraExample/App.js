/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'


const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Camera Permission",
        message:"App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission given");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedImagePath: null,
      cameraImagePath: null
    }
  }
  openLibrary = () => {
    var options = {
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    launchImageLibrary(options, (response) => {
      console.log(response)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        const test = response.assets[0].uri
        console.log(test)
        this.setState({
          selectedImagePath: source.assets[0].uri,
        });
      }
    })
  }
  openCamera = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false
    }
    requestCameraPermission
    launchCamera(options, (response) => {
      console.log(response)
      let source = response;
        const test = response.assets[0].uri
        console.log(test)
        this.setState({
          selectedImagePath: source.assets[0].uri,
        });
    })
  }
  

  render() {
    const uri = this.state.selectedImagePath;
    const cameraImageUri = this.state.cameraImagePath;
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.openLibrary}>
            <Text>Select photo</Text>
          </TouchableOpacity>
          <Image
            source={uri ? { uri }:require('./src/sun.png') }
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.openCamera}>
            <Text>Open camera</Text>
          </TouchableOpacity>
          <Image
            source={uri ? { uri }:require('./src/sun.png') }
            style={{ width: 100, height: 100 }}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
