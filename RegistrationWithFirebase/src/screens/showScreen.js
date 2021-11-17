import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';



class showScreen extends Component {
  state = {
    cars: []
  }
  getCars = () => {
    return fetch(`https://fir-example-4a4d3-default-rtdb.europe-west1.firebasedatabase.app/cars.json`)
      .then((response) => response.json())
      .then((resData) => {
        console.log(resData);
        const list = [];
        for (const i in resData) {
          const obj = {
            make: resData[i].make,
            model: resData[i].model
          }
          list.push(obj)
        }
        console.log(list);
        this.setState({
          cars: list
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  componentDidMount(){
    this.getCars();
  }

  render() {
    const {cars} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cars</Text>
        <ScrollView style={styles.container}>
          {cars.map((car, index) =>
            <View style={styles.cars} key={index}>
              <Text style={styles.make}>
                {car.make} {car.model}
              </Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carsContainer: {
    borderTopWidth: 3,
    borderTopColor: '#ddd',
    flex: 1,
  },
  cars: {
    padding: 20,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 5,
  },
  make: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  model: {
    fontSize: 14,
    color: '#999',
  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default showScreen;

/*
<ScrollView style={styles.container}>
          {cars.cars.map((car, index) =>
            <View style={styles.cars} key={index}>
              <Text style={styles.make}>
                {car.Make} {car.Model}

              </Text>
            </View>
          )}
        </ScrollView>
*/