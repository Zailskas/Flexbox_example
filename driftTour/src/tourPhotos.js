import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

class tourPhotos extends Component {
  render() {
    const tourID = this.props.route.params.tourID;
    const photos = this.props.route.params.photos;

    /*  const imageGrid = (itemData) => {
      const photo = itemData.item.photo.map((item) => (
        <View style={styles.screen}>
          <Text>{item.url}</Text>
          <Image style={styles.logo} source={{uri: item.uri}} />
        </View>
      ));
      console.log(photo);
      return photo;
    };*/

    const renderGridItem = (itemData) => {
      return (
        <View>
          <Text>{itemData.item.uri}</Text>
          <Image style={styles.logo} source={{uri: itemData.item.uri}} />
        </View>
      );
    };
    return (
      <View>
        <Text>{tourID} tour</Text>
        <FlatList
          data={photos}
          renderItem={renderGridItem}
          keyExtractor={(item, index) => item.key}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  logo: {
    width: '90%',
    height: 240,
    resizeMode: 'cover',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default tourPhotos;
