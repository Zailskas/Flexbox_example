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
 

 class firstStackPage extends Component {
   render() {
     return (
       <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View>
           <Text>It is first stack page</Text>
           <Button
              title="Go to secondStackPage"
              onPress={() => this.props.navigation.navigate('secondStackPage')}
           />
         </View>
       </SafeAreaView>
     )
   }
 }
 
 
 export default firstStackPage;
 