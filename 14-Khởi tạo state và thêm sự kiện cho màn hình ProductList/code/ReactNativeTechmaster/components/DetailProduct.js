/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    Container,    
} from 'native-base';

export default class DetailProduct extends Component {    
    static navigationOptions = {
        title: 'Chi tiết sản phẩm',
        headerStyle: {
            backgroundColor: 'rgb(223, 63, 72)',
        },    
        headerTintColor: 'white'
    };
    render() {
        return (<Container>            
        </Container>);
    }
}