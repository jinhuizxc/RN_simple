/**
 *
 * 常量的导入与导出
 *
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const name = '小明';
const age = '22';
// 批量导出
export {name,age};

export default class EIComponent extends Component {

    render() {
        return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello {this.props.name}</Text>

    }
}
