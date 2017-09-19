import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**
 * @state
 * 组件state 定义的两种方式：
 *1、state={
        size:80
    };
 2、
 constructor(props){
        super(props);
        this.state ={
            size:80,
        }
    }
 */
export default class StateTest extends Component {

    state = {
        size: 80
    };

    constructor(props) {
        super(props);
        // this.state = {
        //     size: 80,
        // }
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 20}}
                onPress={()=>{
                    this.setState({
                        size: this.state.size + 10
                    })
                }}>变大</Text>
                <Text style={{fontSize: 20}}
                      onPress={()=>{
                          this.setState({
                              size: this.state.size - 10
                          })
                      }}>变小</Text>
                <Image style={{width: this.state.size, height:this.state.size}}
                 source={require('./qiqiu.png')}/>
            </View>
        )


    }
}