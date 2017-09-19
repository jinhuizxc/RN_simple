/**
 * 组件的加载与卸载
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent from './HelloComponent'
import LifeCycle from './LifeCycle'
import EIComponent, {name, age, sum} from './EIComponent'

export default class RN_simple extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            remove: false,
            result: '',
        })
    }

    render() {

        return (
            <View style={styles.container}>

                <Text style={{fontSize: 20}}>名字：{name}</Text>
                <Text style={{fontSize: 20}}>年龄：{age}</Text>
                <Text style={{fontSize: 20}}
                      onPress={()=> {
                          const result = sum(2, 3);
                          this.setState({
                              result: result,
                      })
                      }}>2 + 3 ={this.state.result}</Text>
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