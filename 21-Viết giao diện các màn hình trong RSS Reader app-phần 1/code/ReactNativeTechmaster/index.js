/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
react-native install mobx
react-native install mobx-react
react-native install react-navigation
react-native install simple-xml2json
react-native install react-native-vector-icons
react-native install native-base
*/
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FeedsList from './screens/FeedsList';
import FeedDetail from './screens/FeedDetail';

const Navigator = StackNavigator({
    FeedsList: { screen: FeedsList },
    FeedDetail: { screen: FeedDetail },
    // EntryDetail: { screen: EntryDetail },
    // AddNewFeed: { screen: AddNewFeed },
});

AppRegistry.registerComponent('ReactNativeTechmaster', () => Navigator);
