/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
Màn hình hiện Modal, điền thông tin sản phẩm mới
*/
import React, { Component } from 'react';
import {
    View, StyleSheet
} from 'react-native';
import {
    Body, Container, Button,
    Content, Right, Text, CheckBox, Item, Input
} from 'native-base';
import Modal from "react-native-modal";
export default class NewProductModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            isVisible: false
        }
    }
    showModal = () => {
        this.setState({ isVisible: true })
    }
    hideModal = () => {
        this.setState({ isVisible: false })
    }
    render() {
        return (
            <Modal
                isVisible={this.state.isVisible}
                onBackdropPress={this.hideModal}
                avoidKeyboard={true}
            >
                <View style={styles.modal}>
                    <Item style={styles.itemInput}>
                        <Input placeholder="Tên sản phẩm"
                            onChangeText={text => {
                                let newProduct = this.state.product;
                                newProduct.name = text;
                                this.setState({ product: newProduct });
                            }}
                            value={this.state.product.name}
                            style={styles.input}
                        />
                    </Item>
                    <Item style={styles.itemInput}>
                        <Input placeholder="Giá sản phẩm"
                            onChangeText={text => {
                                let newProduct = this.state.product;
                                newProduct.price = text;
                                this.setState({ product: newProduct });
                            }}
                            value={this.state.product.price}
                            style={styles.input}
                            keyboardType='numeric'
                        />
                    </Item>
                </View>
            </Modal>);
    }
}
const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'white',
        height: 230,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginHorizontal: 20,
        paddingLeft: 10,
        borderColor: 'rgb(100,121,133)',
        borderWidth: 1
    },
    itemInput: {
        marginTop: 10
    },
});