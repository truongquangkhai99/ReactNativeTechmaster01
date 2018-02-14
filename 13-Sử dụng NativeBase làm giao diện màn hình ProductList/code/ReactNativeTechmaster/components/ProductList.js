/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    Body, Container,
    Content, Right, Text, CheckBox,
    List, ListItem, Fab, Icon
} from 'native-base';
import { StyleSheet } from 'react-native';
export default class ProductList extends Component {
    static navigationOptions = {
        title: 'Danh sách sản phẩm',    
        headerStyle: {
            backgroundColor: 'rgb(223, 63, 72)',
        },    
        headerTintColor: 'white'
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (<Container style={{ backgroundColor: 'rgb(210, 230, 239)' }}>
            <Content>
                <List>
                    <ListItem>
                        <Body>
                            <Text style={styles.nameText}>Áo thun cổ lọ</Text>
                            <Text style={styles.priceText}>Giá: 100K</Text>
                        </Body>
                        <Right>
                            <CheckBox
                                checked={true}
                            />
                        </Right>
                    </ListItem>
                    <ListItem>
                        <Body>
                            <Text style={styles.nameText}>Áo sơ mi trắng</Text>
                            <Text style={styles.priceText}>Giá: 120K</Text>
                        </Body>
                        <Right>
                            <CheckBox
                                checked={true}
                            />
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>);
    }
}
const styles = StyleSheet.create({
    nameText: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 16
    },
    priceText: {
        marginHorizontal: 10,
        marginTop: 10,
        fontSize: 16
    }
});