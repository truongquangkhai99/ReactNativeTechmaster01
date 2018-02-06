/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Hello } from './Hello';

export default class Greetings extends Component {
    render() {
        return (<View>
            <Hello name='Hoàng'dateOfBirth='1979'/>
            <Hello name='Huy'dateOfBirth='1980'/>
            <Hello name='Sơn'dateOfBirth='1981'/>
            <Hello name='Thành'dateOfBirth='1982'/>
        </View>);
    }
}