/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';
 import {
   Button,
   SafeAreaView,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 

 class secondTabPage extends Component {
   render() {
     return (
       <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View>
           <Text>It is second Tab page</Text>
         </View>
       </SafeAreaView>
     )
   }
 }
 
 
 export default secondTabPage;
 