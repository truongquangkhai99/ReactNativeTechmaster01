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
import { fetchFeed, selectEntry } from '../actions';
import { observer } from 'mobx-react/native';

@observer
export default class FeedDetail extends React.Component {
    static navigationOptions = props => ({
        title: props.screenProps.store.selectedFeed.title,        
    });
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            entry: null,
        };
    }    
    componentWillMount() {
        this.setState({ loading: true });
        fetchFeed(this.props.screenProps.store.selectedFeed.url).
            then(feed => {
                this.setState({ loading: false });
                this.setState({ entry: feed.entry });
            });
    }
    _handlePressEntry() {
        // alert("Bạn bấm vào 1 entry");
        this.props.navigation.navigate('EntryDetail');
    }
    render() {
        const { entry } = this.state;  
        return (
            <Container>
                <Content>
                    {this.state.loading && <ActivityIndicator style=
                        {{ margin: 20 }} />}
                    <List>
                        {entry &&
                            entry.map((e, i) => (
                                <ListItem key={i}
                                    onPress={this._handlePressEntry.bind(this, e)}
                                >
                                    <Text>{e.title}</Text>
                                </ListItem>
                            ))}
                    </List>
                </Content>
            </Container>
        );
    }
}
