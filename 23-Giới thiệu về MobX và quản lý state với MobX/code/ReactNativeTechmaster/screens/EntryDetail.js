/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React from 'react';
import { Container, Content } from 'native-base';
import { WebView } from 'react-native';

export default class EntryDetail extends React.Component {
    render() {
        return <WebView source={{ uri: "https://www.google.com" }} />;
    }
}