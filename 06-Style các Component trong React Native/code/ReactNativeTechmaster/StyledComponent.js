/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
//Cách 1: Định nghĩa React Native Component dạng class
/*
export class StyledComponent extends Component {
    render() {
        return (<View style={{
                            backgroundColor: 'cyan',
                            width: 100,
                            height: 100
                            }}>

        </View>);
    }
}
*/
//Cách 2: Định nghĩa React Native Component dạng hàm(arrow function)
export const StyledComponent = (props) => {
    return (<View style={styles.container}>
        <Image 
            source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Sitta-carolinensis-001_%28mirrored%29.jpg'}}
            style={[styles.bigImage, styles.squaredImage]}
            />
    </View>);
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'cyan',
        width: 280,
        height: 280
    },
    squaredImage: {
        width: 200, 
        height: 200,
        margin: 40
    },
    bigImage: {
        width: 220, 
        height: 220,
        margin: 20
    }
});