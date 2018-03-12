/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

export default class LocationSearch extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>CHỌN ĐỊA ĐIỂM</Text>
                {this.props.value && (
                    <TextInput style={styles.location} value={this.props.value} />
                )}
                {!this.props.value && <ActivityIndicator style={styles.spinner} />}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 20, 
        marginTop: 40, 
        height: 60,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,      
    },
    title: {      
        color: 'green',
        fontWeight: 'bold',
        fontSize: 13,     
        alignSelf: 'center',   
    },
    location: {
        height: 40,   
        textAlign: 'center',
        fontSize: 14,     
    },
    spinner: {
        margin: 10,
    },
});