/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Image, Dimensions, TextInput,
    SafeAreaView, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';

export default class TextInputExample extends Component {
    constructor(props) {
        super(props);
        this.state = {email: 'hoang@gmail.com'};
    }
    render() {
        return (<SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior='padding'>
                <TextInput style={styles.input}
                    placeholder="Enter username/email"
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    keyboardType='email-address'
                    autoCorrect={false} 
                    value={this.state.email}
                    onChangeText={(text)=>{
                        this.setState({email: text});
                        console.log(`this.state = ${JSON.stringify(this.state)}`);
                    }}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgb(32, 53, 70)',
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)'
    }
});