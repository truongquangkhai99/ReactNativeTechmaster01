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
import { addNewFeed, fetchFeed } from '../actions';
export default class AddNewFeed extends Component {
    static navigationOptions = {
        title: "Thêm Feed mới",
    };
    _handleAddPress() {
        alert("Bạn thêm một Feed mới");
        if (this.state.url.length > 0) {
            this.setState({ loading: true });
            fetchFeed(this.state.url)
                .then(feed => {
                    //Gọi action thêm feed mới
                    addNewFeed(this.state.url, feed);
                    this.setState({ loading: false });
                    this.props.navigation.goBack();
                })
                .catch((error) => {
                    alert(`Không thấy RSS Feed trong URL này: ${error}`);
                    this.setState({ loading: false });
                });
        }
    }
    constructor(props) {
        super(props);   
        //http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topsongs/limit=10/xml
        this.state = {
            url: '',
            loading: false,
        };
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
                                onChangeText={url => this.setState({ url })}
                                value={this.state.url}
                            />
                        </Item>
                        <Button
                            block
                            style={{ marginTop: 20 }}
                            onPress={this._handleAddPress.bind(this)}
                        >
                            {this.state.loading && (
                                <ActivityIndicator color="white" style={{ margin: 10 }}
                                />
                            )}
                            <Text>Thêm Feed mới</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}