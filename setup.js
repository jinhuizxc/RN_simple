import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import HelloComponent from './HelloComponent'
import LifeCycle from './LifeCycle'
export default class RN_simple extends Component {

    constructor(props){
        super(props);
        this.state = ({
            remove: false
        })
    }
    render() {
        let view = this.state.remove ? null : <LifeCycle/>;
        let text = this.state.remove ? "加载组件" : '卸载组件';
        return (
            <View style={styles.container}>
                {/*<HelloComponent*/}
                {/*name = "小明"/>*/}
              <Text style={{fontSize:20}}
              onPress={()=>{
                  this.setState({
                     remove:!this.state.remove
                  })
              }}>{text}</Text>
                {view}
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