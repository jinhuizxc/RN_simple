/**
 * 生命周期
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('--constructor--');
        this.state = {
            count: 0
        }
    }

    // 组件被调用之前用这个方法
    componentWillMount() {
        console.log('--componentWillMount--');
    }

    // 组件被调用之后用这个方法
    componentDidMount() {
        console.log('--componentDidMount--');
    }

    // 组件在更新后用这个方法
    componentWillReceiveProps(nextProps) {
        console.log('--componentWillReceiveProps--');
    }

    // 在接收到新的 props 或者 state，将要渲染之前调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log('--shouldComponentUpdate--');
        return true;
    }

    // 在接收到新的 props 或者 state 之前立刻调用。
    componentWillUpdate(nextProps, nextState) {
        console.log('--componentWillUpdate--');
    }

    // 在组件的更新已经同步到 DOM 中之后立刻被调用。
    componentDidUpdate(prevProps, prevState) {
        console.log('--componentDidUpdate--');
    }

    // 在组件从 DOM 中移除的时候立刻被调用。
    componentWillUnmount() {
        console.log('--componentWillUnmount--');
    }

    render() {
        console.log('--render--');
        return <View>
            <Text style={{fontSize: 20, backgroundColor: 'red'}}
            onPress={()=>{
                this.setState({
                    count:this.state.count + 1,
                })
            }}>文本可点击</Text>
            <Text style={{fontSize: 20}}> 点击了{this.state.count}次</Text>
        </View>
    }
}
