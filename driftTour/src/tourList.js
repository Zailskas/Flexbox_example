import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import axios from 'axios';

class tourList extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = () => {
    axios
      .get('https://my-json-server.typicode.com/Zailskas/driftSeasonAPI/season')
      .then((res) => {
        const Data = res.data;
        console.log(Data);
        this.setState({
          data: Data,
        });
      });
  };

  render() {
    const renderTourItem = (itemData) => {
      return (
        <View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('TourPhotos', {
                tourID: itemData.item.tourID,
                photos: itemData.item.photo,
              })
            }
            style={styles.gridItem}>
            <Text style={styles.appButtonText}>{itemData.item.tour}</Text>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <FlatList
        data={this.state.data}
        renderItem={renderTourItem}
        keyExtractor={(item, index) => item.tourID.toString()}
      />
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 50,
    backgroundColor: '#089668',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonContainer: {
    backgroundColor: '#089668',
    borderRadius: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default tourList;
