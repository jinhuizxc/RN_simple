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
import PropsTest from './PropsTest'

export default class RN_simple extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            remove: false,
            result: '',
        })
    }

    // ES6: 延展操作符... 用于传递属性  <PropsTest {...params}/>
    render() {
        const params = {name: '小李', age: 18, sex: '男'};
        // 解构赋值
        const {name, sex} = params;
        return (
            <View style={styles.container}>
                <PropsTest
                    name={name}
                    sex={sex}
                />
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