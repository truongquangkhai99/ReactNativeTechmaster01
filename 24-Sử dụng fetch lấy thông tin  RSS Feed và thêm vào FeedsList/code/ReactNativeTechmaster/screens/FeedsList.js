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
import { observer } from 'mobx-react/native';

@observer
export default class FeedsList extends Component {
    static navigationOptions = props => ({
        title: 'Danh sách các Feed',   
        headerRight: <Button transparent onPress={() =>
            props.navigation.navigate('AddNewFeed')}>
            <Icon name="ios-add-circle-outline" style={{ color: 'black' }} />
        </Button>,             
    });
    _handleFeedPress() {
        // alert("Bạn chọn ListItem");
        this.props.navigation.navigate('FeedDetail', {});
    }
    convertFeedToListItem = (feed, index) => {
        return <ListItem key={index}>
            <Text>{feed.title}</Text>
        </ListItem>
    }
    render() {
        const { feeds } = this.props.screenProps.store;
        // alert(`feeds = ${JSON.stringify(feeds)}`);
        return (
            <Container>
                <Content>
                    <List>
                        {feeds && feeds.map(this.convertFeedToListItem)}
                    </List>
                </Content>
            </Container>
        );
    }
}