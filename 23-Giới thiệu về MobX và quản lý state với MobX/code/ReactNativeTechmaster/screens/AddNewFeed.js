/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/

import React, { Component } from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Button,
    Text,
} from 'native-base';
import { Alert, ActivityIndicator } from 'react-native';
export default class AddNewFeed extends Component {
    static navigationOptions = {
        title: "Thêm Feed mới",
    };
    _handleAddPress() {
        alert("Bạn thêm một Feed mới")
    }
    render() {
        return (
            <Container style={{ padding: 10 }}>
                <Content>
                    <Form>
                        <Item>
                            <Input
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder={"Nhập URL của Feed"}
                            />
                        </Item>
                        <Button
                            block
                            style={{ marginTop: 20 }}
                            onPress={this._handleAddPress.bind(this)}
                        >
                            <ActivityIndicator color="white" style={{ margin: 10 }}
                            />
                            <Text>Thêm Feed mới</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}