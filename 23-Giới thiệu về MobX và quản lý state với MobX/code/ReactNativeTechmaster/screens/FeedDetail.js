/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React from 'react';
import {
    Container,
    Content,
    List,
    ListItem,
    Text,
    Button,
    Icon,
    Spinner,
} from 'native-base';
import { ActivityIndicator } from 'react-native';

export default class FeedDetail extends React.Component {
    _handlePressEntry() {
        alert("Bạn bấm vào 1 entry");
        this.props.navigation.navigate('EntryDetail');
    }
    render() {
        return (
            <Container>
                <Content>
                    <ActivityIndicator style={{ margin: 20 }} />
                    <List>
                        <ListItem key="1"
                            onPress={this._handlePressEntry.bind(this)}
                        >
                            <Text>"Đây là title của Entry 1"</Text>
                        </ListItem>
                        <ListItem key="2"
                            onPress={this._handlePressEntry.bind(this)}
                        >
                            <Text>"Đây là title của Entry 2"</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
