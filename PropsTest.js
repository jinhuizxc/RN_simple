import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 *  props属性
 *  propsType检查属性的正确性、必须性
 */
export default class PropsTest extends Component{

    // 定义默认属性,需要添加static 不然会有警告！
    static defaultProps ={
       name: '小红',
        age: 16
    };
    // 属性检查
    static propsType = {
       name:PropTypes.string,
        age:PropTypes.number,
        sex:PropTypes.string.isRequired,  // 性别是必须传递的
    };
    render(){
        return(
            <View>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>姓名 {this.props.name}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>年龄 {this.props.age}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>性别 {this.props.sex}</Text>
            </View>
            )


    }
}