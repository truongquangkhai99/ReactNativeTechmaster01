/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    StyleSheet, Text, View, SectionList, 
    TouchableOpacity, SafeAreaView
} from 'react-native';
import fakeSections from './fakeSections';
class ListItem extends Component {
    _onPress = () => {
        alert(`Bạn đã bấm vào sản phẩm: ${this.props.name}`);
    };
    render() {
        return (
            <TouchableOpacity onPress={this._onPress}>
                <View style={{ backgroundColor: 'skyblue'}}>
                    <Text style={styles.normalText}>{this.props.name}</Text>
                    <Text style={styles.normalText}>{this.props.price}</Text>                    
                </View>
            </TouchableOpacity>
        );
    }
}
const SectionHeader = (props) => {
    return (<Text style={styles.headerText}>{props.title}</Text>);
}

export default class SectionListExample extends Component {
    render() {
        return (
            <SafeAreaView>
                <SectionList
                    renderItem={({ item }) => <ListItem name={item.name} price={item.price}/>}
                    renderSectionHeader={({ section }) => <SectionHeader title={section.title} />}
                    sections={fakeSections}
                    keyExtractor={(item) => `${item.name}`}
                    ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'steelblue' }} />}
                />
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    headerText: {
        height: 50, backgroundColor: 'powderblue', 
        fontWeight: 'bold', fontSize: 20,
        padding: 12
    },
    normalText: {
        fontSize: 18,
        color: 'black', margin: 10
    },    
});