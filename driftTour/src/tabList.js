import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class tabList extends Component {
  render() {
    console.log(this.props.data);
    return (
      <View style={styles.screen}>
        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  },
  gridItem: {
    margin: 15,
    height: 50,
    backgroundColor: '#089668',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
export default tabList;
