/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Image, Dimensions, TextInput,
    SafeAreaView, TouchableOpacity, KeyboardAvoidingView,
    ScrollView, RefreshControl, FlatList
} from 'react-native';
import { fakeArray } from './fakeData';

class MyListItem extends Component {
    _onPress = () => {
        alert(`Bạn đã bấm vào sản phẩm: ${this.props.name}`);
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{ backgroundColor: this.props.backgroundColor }}>
                    <Text style={{
                        fontWeight: 'bold', fontSize: 18,
                        color: 'black', marginHorizontal: 10, marginTop: 10
                    }}>{this.props.name}</Text>
                    <Text style={{
                        fontSize: 15, color: 'black',
                        marginHorizontal: 10, marginVertical: 10
                    }}>{this.props.location}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class FLatListExample extends Component {
    constructor(props) {
        super(props);
        this.state = { fakeArray: fakeArray };
    }
    _renderItem = ({ item, index }) => (
        <MyListItem
            id={item.id}
            //onPressItem={this._onPressItem}
            name={item.name}
            location={item.location}
            backgroundColor={index % 2 == 0 ? 'skyblue' : 'powderblue'}
        />
    );
    render() {
        let { fakeArray } = this.state;
        return (<SafeAreaView>
            <FlatList
                data={fakeArray}
                keyExtractor={(item, index) => `${item.id}`}
                renderItem={this._renderItem}                
                ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'steelblue' }} />}
            />
        </SafeAreaView>);
    }
}