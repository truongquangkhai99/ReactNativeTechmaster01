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
        this.state = {
            products: [ { id: 1, name: 'Quần Âu nam Hàn Quốc', price: '100' }, 
                        { id: 2, name: 'Áo phông Nam cổ bẻ', price: '200' }]
        };
    }
    _handleCheckProduct = (product) => {
        this.state.products.forEach(p => {
            if (product.id === p.id) {
                p.checked = !p.checked;
            }
            return p;                
        });
        //Bắt buộc phải gọi lệnh setState
        this.setState({ products: this.state.products });
    }
    _handleProduct = (product) => {
        // alert(`Bạn chọn sản phẩm: ${product.name}`);
        this.props.navigation.navigate('DetailProduct', {
            product: product,
            updateProduct: this.updateProduct
        });
    }
    updateProduct = (updatedProduct) => {
        this.state.products.forEach(p => {
            if (updatedProduct.id === p.id) {
                p.name = updatedProduct.name;
                p.price = updatedProduct.price;
            }
            return p;
        });
        //Bắt buộc phải gọi lệnh setState
        this.setState({ products: this.state.products });
    }
    convertProductToListItem = (product) => {
        return (<ListItem key={product.id}
                    button onPress={this._handleProduct.bind(this, product)}
                >
            <Body>
                <Text style={styles.nameText}>{product.name}</Text>
                <Text style={styles.priceText}>{`${product.price}K`}</Text>
            </Body>
            <Right>
                <CheckBox
                    checked={product.checked}      
                    onPress={this._handleCheckProduct.bind(this, product)}              
                />
            </Right>
        </ListItem>);
    }
    _handleAddProduct = () => {
        alert(`Bạn thêm sản phẩm mới`);        
    }
    _handleDeleteCheckedProducts = () => {
        alert(`Bạn xoá các sản phẩm đã chọn !`);
    }
    render() {
        return (<Container style={{ backgroundColor: 'rgb(210, 230, 239)' }}>
            <Content>
                <List>
                    {this.state.products.map(this.convertProductToListItem)}
                </List>
            </Content>
            <Fab
                // Floating Action Buttons = Nút bấm nổi - chèn lên các Component khác                
                style={{ backgroundColor: 'rgb(100,121,133)' }}
                position="bottomRight"   
                onPress={this._handleAddProduct.bind(this)}             
            >
                <Icon name="add" />
            </Fab>
            <Fab
                style={{ backgroundColor: '#f31944' }}
                position="bottomLeft"  
                onPress={this._handleDeleteCheckedProducts.bind(this)}                           
            >
                <Icon ios="ios-remove" android="md-remove" />
            </Fab> 
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