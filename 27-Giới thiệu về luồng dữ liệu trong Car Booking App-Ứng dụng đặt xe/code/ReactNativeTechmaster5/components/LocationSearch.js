import React from 'react';
import {
    View,
    Text,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';

export default class LocationPicking extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>ĐỊA ĐIỂM</Text>
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
        alignSelf: 'center',
        fontSize: 13,
        color: 'green',
        fontWeight: 'bold',
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
