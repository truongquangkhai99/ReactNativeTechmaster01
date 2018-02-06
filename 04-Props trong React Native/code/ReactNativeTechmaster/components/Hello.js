/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';
/*
Cách 1: Component dưới dạng class
export class Hello extends Component {
    render() {
        return (<Text style={{marginTop: 40, fontSize: 24}}>
            Hello {this.props.name}, Năm sinh: {this.props.dateOfBirth}
        </Text>);
    }
}
*/
// Cách 2: Component dưới dạng "function"
export const Hello = (props) => {
    return (<Text style={{marginTop: 40, fontSize: 24}}>
        Hello {props.name}, Năm sinh: {props.dateOfBirth}
    </Text>);
}