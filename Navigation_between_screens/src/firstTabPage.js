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
    TextInput, TouchableOpacity, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class firstTabPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            teamname: '',
        }
    }

    inputChangeName(value) {
        console.log(value)
        this.setState({
            name: value
        })
    }
    inputChangeTeamName(value) {
        this.setState({
            teamname: value
        })
    }
    saveData = async () => {
        if (this.state.name === 0) {
            Alert.alert('Insert name!!!')
        } else {
            try {
                await AsyncStorage.setItem('Username', this.state.name);
            } catch (error) {
                console.log(error)
            }
        }
    }
    saveObject = async () => {
        const object = {name: this.state.name, teamname: this.state.teamname}
        if (object === null) {
            Alert.alert('Fill inputs')
        } else {
            try {
                const jsonValue = JSON.stringify(object);
                await AsyncStorage.setItem('Object', jsonValue);
                console.log(jsonValue);
            } catch (error) {
                console.log('Neveikia');
            }
        }
    }
    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('Username')
            if (value !== null) {
                console.log('Paspaudziu',value)
            }
        } catch (e) {
            // error reading value
        }
    }
    getObject = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Object')
            const value = JSON.parse(jsonValue);
            console.log(value.name);
            return value
        } catch (error) {
            //error
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Text>It is first Tab page</Text>
                    <TextInput placeholder="Insert name" style={styles.textIinput}
                        onChangeText={(value) => this.inputChangeName(value)}
                    />
                    <TextInput placeholder="Insert favorite team" style={styles.textIinput}
                        onChangeText={(value) => this.inputChangeTeamName(value)}
                    />
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.saveObject}>
                        <Text>INSERT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.getObject}>
                        <Text>SHOW</Text>
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
