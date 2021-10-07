import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class mainMenu extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TourList')}
          style={styles.gridItem}>
          <Text style={styles.appButtonText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Tour')}
          style={styles.gridItem}>
          <Text style={styles.appButtonText}>Start with tab</Text>
        </TouchableOpacity>
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
export default mainMenu;
