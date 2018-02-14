/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
import {
    Body, Container, Button,
    Content, Right, Text, CheckBox, Item, Input
} from 'native-base';

export default class DetailProduct extends Component {
    static navigationOptions = {
        title: 'Chi tiết sản phẩm',
        headerStyle: {
            backgroundColor: 'rgb(223, 63, 72)',
        },
        headerTintColor: 'white'
    };
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.navigation.state.params.product
        }
    }
    render() {
        const { updateProduct } = this.props.navigation.state.params;
        return (<Container style={{ backgroundColor: 'rgb(210, 230, 239)' }}>
            <Content>
                <Item style={styles.itemInput}>
                    <Input placeholder="Tên sản phẩm"
                        onChangeText={text => {
                            let updatedProduct = this.state.product;
                            updatedProduct.name = text;
                            this.setState({ product: updatedProduct });
                        }}
                        value={this.state.product.name}
                        style={styles.input}
                    />
                </Item>
                <Item style={styles.itemInput}>
                    <Input placeholder="Giá sản phẩm"
                        onChangeText={text => {
                            let updatedProduct = this.state.product;
                            updatedProduct.price = text;
                            this.setState({ product: updatedProduct });
                        }}
                        value={this.state.product.price}
                        style={styles.input}
                        keyboardType='numeric'
                    />
                </Item>
                <Button block 
                    style={styles.button}
                    onPress={() => {  
                        updateProduct(this.state.product);                     
                        this.props.navigation.goBack();                          
                    }}
                    >
                    <Text>Lưu sản phẩm</Text>
                </Button>
            </Content>
        </Container>);
    }
}
const styles = StyleSheet.create({
    input: {
        marginHorizontal: 10,
        paddingLeft: 10,
        borderColor: 'rgb(100,121,133)',
        borderWidth: 1
    },
    itemInput: {
        marginTop: 10
    },
    button: {
        backgroundColor: 'rgb(16,33,48)',
        marginHorizontal: 10,
        marginTop: 20
    }
});