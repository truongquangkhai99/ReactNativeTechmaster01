/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/

import React, { Component } from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Icon,
    Button,
    Separator,
} from 'native-base';
import { StyleSheet } from 'react-native';
import FeedDetail from './FeedDetail';

export default class FeedsList extends Component {
    static navigationOptions = props => ({
        title: 'Danh sách các Feed',   
        headerRight: <Button transparent onPress={() =>
            props.navigation.navigate('AddNewFeed')}>
            <Icon name="ios-add-circle-outline" style={{ color: 'black' }} />
        </Button>,             
    });
    _handleFeedPress() {
        alert("Bạn chọn ListItem");
        this.props.navigation.navigate('FeedDetail', {});
    }

    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem key="1"
                            onPress={this._handleFeedPress.bind(this)}>
                            <Text>"Đây là title của Feed 1"</Text>
                        </ListItem>
                        <ListItem key="2"
                            onPress={this._handleFeedPress.bind(this)}>
                            <Text>"Đây là title của Feed 2"</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}