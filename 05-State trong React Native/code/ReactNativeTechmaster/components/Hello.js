/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Hello extends Component {
    constructor(props) {
        super(props);
        //Ngoài hàm constructor, phải dùng setState
        this.state = {timer: 0};
        setInterval(()=>{            
            this.setState((previousState) =>{
                return {timer: previousState.timer + 1}
            });
            console.log(`state mới là : ${this.state.timer}`);
        }, 1000);
    }
    render() {
        return (<Text style={{marginTop: 40, fontSize: 24}}>
            Hello {this.props.name}, 
            {/* Năm sinh: {this.props.dateOfBirth} */}
            Đếm: {this.state.timer}
        </Text>);
    }
}