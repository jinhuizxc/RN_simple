import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent from './HelloComponent'

export default class RN_simple extends Component {
    render() {
        return (
            <View style={styles.container}>
                <HelloComponent
                name = "小明"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});