/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Image, Dimensions,
    SafeAreaView, TouchableOpacity
} from 'react-native';

export class FlexComponent extends Component {
    render() {
        return (<SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <Image style={styles.profileImage}
                    source={require('./images/profile.png')}
                />
            </View>
            <View style={styles.midContainer}></View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'green' }}>
                    <Text style={styles.buttonTitle}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, backgroundColor: 'red' }}>
                    <Text style={styles.buttonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>);
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
        // flexDirection: 'row'
    },
    topContainer: {
        // backgroundColor: 'powderblue',
        flex: 1,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    midContainer: {
        // backgroundColor: 'skyblue',
        flex: 1,
        height: 100,
    },
    bottomContainer: {
        // backgroundColor: 'steelblue',
        // flex: 6,
        height: 50,
        flexDirection: 'row'
    },
    buttonTitle: {
        fontSize: 18,
        textAlign: 'center',
        padding: 12,
        color: 'white'
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 80
    }
});