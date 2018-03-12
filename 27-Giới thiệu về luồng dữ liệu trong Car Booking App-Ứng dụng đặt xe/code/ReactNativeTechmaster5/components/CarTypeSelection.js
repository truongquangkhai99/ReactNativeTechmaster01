import React from 'react';
import {
    View,
    Image, Dimensions, Text, TouchableOpacity, Animated, StyleSheet,
} from 'react-native';
import { logAlert } from '../Log';
const { height, width } = Dimensions.get('window');
const carTypes = [
    {
        id: 0,
        name: "Tiết kiệm"
    },
    {
        id: 1,
        name: "Bình thường"
    },
    {
        id: 2,
        name: "Siêu xe"
    }
];
export default class CarTypeSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carPositionX: new Animated.Value(15 + width * 0.1),
        };
    }
    _onCarTypeChange(carType) {             
        switch (carType.id) {
            case 0:
                Animated.timing(this.state.carPositionX, {
                    toValue: 15 + width * 0.1,
                    duration: 500,
                }).start();
                break;            
            case 1:
                Animated.timing(this.state.carPositionX, {
                    toValue: width * 0.5 - 20,
                    duration: 500,
                }).start();
                break;
            case 2:
                Animated.timing(this.state.carPositionX, {
                    toValue: width * 0.77,
                    duration: 500,
                }).start();
                break;                
        }        
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.classBar}
                    source={require('../images/carBar.png')}
                />
                <Animated.View
                    style={[styles.classButton, {
                        left:
                            this.state.carPositionX
                    }]}
                >
                    <Image
                        style={styles.classButtonImage}
                        source={require('../images/class.png')}
                    />
                </Animated.View>
                <TouchableOpacity
                    style={[
                        styles.classButtonContainer,
                        {
                            width: width / 3 - 10,
                            left: width * 0.11,
                        },
                    ]}
                    onPress={this._onCarTypeChange.bind(this, carTypes[0])}
                >
                    <Text style={styles.classLabel}>{carTypes[0].name}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.classButtonContainer,
                        { width: width / 3, left: width / 3 },
                    ]}
                    onPress={this._onCarTypeChange.bind(this, carTypes[1])}
                >
                    <Text style={[styles.classLabel, { textAlign: 'center' }]}>
                        {carTypes[1].name}
          </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.classButtonContainer,
                        { width: width / 3, right: width * 0.11 },]}
                    onPress={this._onCarTypeChange.bind(this, carTypes[2])}
                >
                    <Text style={[styles.classLabel, { textAlign: 'right' }]}>
                        {carTypes[2].name}
      </Text>
                </TouchableOpacity>
            </View>);
    }
}
const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: 10,
    },
    classBar: {
        width: width * 0.7, left: width * 0.15, resizeMode: 'contain', height: 30,
        top: 35,
    },
    classButton: {
        top: 30,
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        position: 'absolute',
        backgroundColor: 'white',
        height: 40,
        width: 40,
    },
    classButtonImage: {
        alignSelf: 'center', resizeMode: 'contain', width: 30,
    },
    classButtonContainer: {
        backgroundColor: 'transparent',
        position: 'absolute',
        height: 70,
        top: 10,
    },
    classLabel: {
        paddingTop: 5,
        fontSize: 12,
    },
});


