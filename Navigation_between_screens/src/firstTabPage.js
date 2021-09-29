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
    TextInput, TouchableOpacity
} from 'react-native';


class firstTabPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    inputChangeName(value) {
        console.log(value)
        this.setState({
            name: value
        })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Text>It is first Tab page</Text>
                    <TextInput placeholder="Insert name" style={styles.textIinput} 
                        onChangeText={(value) => this.inputChangeName(value)}
                    />
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text>INSERT</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    textIinput: {
        borderWidth: 2,
        height: 50,
        marginTop: 10
    }, 
    buttonStyle: {
        borderWidth: 1, 
        alignItems: 'center',
        padding: 15,
        marginTop: 15, 
        borderColor: 'green'
    }
})

export default firstTabPage;
