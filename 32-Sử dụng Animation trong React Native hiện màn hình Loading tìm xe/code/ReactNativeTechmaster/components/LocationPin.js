/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React from 'react';
import {
    View,
    Text, Dimensions, TouchableOpacity, StyleSheet,
} from 'react-native';
const { height, width } = Dimensions.get('window');
export default class LocationPin extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>CHỌN ĐỊA ĐIỂM</Text>
                    <TouchableOpacity
                        style={styles.bannerButton}
                        onPress={this.props.onPress}
                    >
                        <Text style={styles.bannerButtonText}>{'>'}</Text>
                    </TouchableOpacity>                    
                </View>     
                <View style={styles.bannerPole} />           
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: height / 2 - 60,
        left: width / 2 - 120,
        // backgroundColor: 'red'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: '#333',
        padding: 10,
        shadowColor: '#000000', 
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
    },
    bannerText: {
        color: 'white',
        alignSelf: 'center',
        marginHorizontal: 10,
        fontSize: 18,
        alignSelf: 'center',
    },
    bannerButton: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    bannerButtonText: {
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 18,
    },
    bannerPole: {
        backgroundColor: '#333',
        width: 3,
        height: 30,
        alignSelf: 'center',
    }
});