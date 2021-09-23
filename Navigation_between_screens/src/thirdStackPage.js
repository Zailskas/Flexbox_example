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
 
 class thirdStackPage extends Component {
   render() {
     return (
       <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <View>
           <Text>It is third stack page</Text>
           <Button
              title="Go to firstStackPage"
              onPress={() => this.props.navigation.navigate('firstStackPage')}
           />
           <Button 
             title="Go back"
             onPress={() => this.props.navigation.goBack()} 
           />
           <Button 
                title="Go back to first screen in stack"
                onPress={() => this.props.navigation.popToTop()}
           />
         </View>
       </SafeAreaView>
     )
   }
 }
 
 
 export default thirdStackPage;