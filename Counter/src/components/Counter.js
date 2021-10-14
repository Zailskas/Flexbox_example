import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {changeValue}  from '../../appStore/actions/actions';

class Counter extends Component {

    increaseValue = () => {
        let {value, changeValue} = this.props
        let newValue = value.value + 1;
        changeValue(newValue);
    }
    decrease = () => {
        let {value, changeValue} = this.props
        let newValue = value.value - 1;
        changeValue(newValue);
    }
    render() {
        console.log(this.props.value);
        return (
            <SafeAreaView style={styles.container}>
                <View style={{margin: 20}}>
                    <TouchableOpacity onPress={()=>this.increaseValue()}>
                        <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>Padidinti</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Text style={{...styles.addButtonText, marginLeft: 40}}>{this.props.value.value}</Text>
                <Text style={{...styles.addButtonText, marginLeft: 40}}>{this.props.value.text}</Text>
                <View style={{margin: 20}}>
                    <TouchableOpacity onPress={() => this.decrease()}>
                        <View style={styles.addButton}>
                            <Text style={styles.addButtonText}>Sumazinti</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addButtonText: {
        fontSize: 24,
        lineHeight: 24,
    },
    addButton: {
        width: 120,
        height: 60,
        backgroundColor: '#6cc900',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    addButtonContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}
export default connect(mapStateToProps, {changeValue})(Counter);