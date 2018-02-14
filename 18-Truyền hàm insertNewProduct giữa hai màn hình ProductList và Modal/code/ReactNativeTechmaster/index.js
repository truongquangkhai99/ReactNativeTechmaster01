/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import { AppRegistry } from 'react-native';
// import App from './App';
import { StackNavigator } from 'react-navigation';

import DetailProduct from './components/DetailProduct';
import ProductList from './components/ProductList';

const Navigator = StackNavigator({        
    ProductList: { screen: ProductList },//Màn hình nào trước thì màn hình đó là root    
    DetailProduct: { screen: DetailProduct },
});

AppRegistry.registerComponent('ReactNativeTechmaster', () => Navigator);
