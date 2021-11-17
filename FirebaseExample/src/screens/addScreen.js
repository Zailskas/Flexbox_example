import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';

const reference = database().ref('/cars');

class addScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      make: '',
      model: ''
    }
  }
  makeChange(make) {
    console.log(make)
    this.setState({ make })
  }
  modelChange(model) {
    console.log(model)
    this.setState({ model })
  }
  handleSubmit = () => {
    fetch(  
      `https://fir-example-4a4d3-default-rtdb.europe-west1.firebasedatabase.app/cars.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          make: this.state.make,
          model: this.state.model
        }),
      },
    );
    //insertCar(this.state.make, this.state.model);
    this.setState({ make: '', model: '' })
  }
  handleSubmitRecord = () => {
  
  }
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add car</Text>
        <View styles={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.make}
            placeholder="Make"
            onChangeText={(text) => this.makeChange(text)}
          />
          <TextInput
            style={styles.input}
            value={this.state.model}
            placeholder="Model"
            onChangeText={(text) => this.modelChange(text)}
          />

        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.addButton}>
              <Text style={styles.addButtonText}>
                Prideti
              </Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  inputContainer: {
    backgroundColor: '#ffffff',
    borderTopColor: '#ededed',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 60,
    width: 60,
  },
  inputWrapper: {
    flex: 2,
  },
  input: {
    height: 40,
    padding: 7,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,

    marginBottom: 5,
  },
  addButtonText: {
    fontSize: 24,
    lineHeight: 24,
  },
  addButton: {
    width: 120,
    height: 40,
    backgroundColor: '#6cc900',
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  addButtonContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});


export default addScreen;