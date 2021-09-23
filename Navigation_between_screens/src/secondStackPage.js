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
   StyleSheet,
   Text,
   View,
   Button
 } from 'react-native';
 
 class secondStackPage extends Component {
   render() {
     return (
       <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View>
           <Text>It is second stack page</Text>
           <Button
              title="Go to thirdStackPage"
              onPress={() => this.props.navigation.navigate('thirdStackPage')}
           />
         </View>
       </SafeAreaView>
     )
   }
 }
 
 
 export default secondStackPage;
 