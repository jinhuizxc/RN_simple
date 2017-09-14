/**
 * 创建组件的3种方式：
 * ES6:
 * ES5:
 * function()函数式：
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

/**
 *  ES6 方式
 */
export default class HelloComponent extends Component{
    render(){
        return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello {this.props.name}</Text>
    }
}

/**
 *  ES5 方式
 */
// var HelloComponent = React.createClass({
//     render(){
//         return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
//    }
// });
// module.exports = HelloComponent;


/**
 *  function()函数式
 *  无状态，不能使用this
 */
// function HelloComponent(props) {
//     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello {props.name}</Text>
// }
// module.exports = HelloComponent;