/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Image, Dimensions, TextInput,
    SafeAreaView, TouchableOpacity, KeyboardAvoidingView,
    ScrollView, RefreshControl
} from 'react-native';
var { width, height } = Dimensions.get('window');

const Page = (props) => {
    return (<View style={{
                width: width, 
                height: height,
                backgroundColor:`${props.backgroundColor}`,                        
            }}>
            <Text style={{
                color: 'white', fontSize: 20, textAlign: 'center'
            }}>{props.textContent}</Text> 
    </View>);
}
export default class HorizontalScroll extends Component {    
    render() {
        return(<SafeAreaView>
            <ScrollView
                maximumZoomScale={2} 
                minimumZoomScale={0.2}
                onMomentumScrollBegin={()=>{
                    // console.log(`Bắt đầu scroll...`);
                }}
                onMomentumScrollEnd={()=>{
                    // console.log(`Kết thúc scroll...`);
                }}
                onScroll={(event) => {
                    // console.log(`contentOffset = ${JSON.stringify(event.nativeEvent.contentOffset)}`);                    
                }}
                refreshControl={<RefreshControl refreshing={false} onRefresh={() => {
                    // console.log(`Cập nhật dữ liệu...`);
                }}/>}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator
                showsVerticalScrollIndicator                
            >
            <Page backgroundColor='red' textContent='Trang 1'/>
                <Page backgroundColor='green' textContent='Trang 2'/>
                <Page backgroundColor='blue' textContent='Trang 3'/>          
            </ScrollView>
        </SafeAreaView>)
    }
}