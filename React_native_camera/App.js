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




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedImagePath: null,
      cameraImagePath: null
    }
  }
  
  

  render() {
    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text>Select photo</Text>
          </TouchableOpacity>
          
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text>Open camera</Text>
          </TouchableOpacity>
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