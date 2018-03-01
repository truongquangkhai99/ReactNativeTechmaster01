/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import { observable } from 'mobx';
import { AsyncStorage } from 'react-native';

class Store {
    @observable feeds;
    @observable selectedFeed;
    @observable selectedEntry;

    constructor() {
        // this.feeds = [];
        AsyncStorage.getItem('@feeds').then(existedFeeds => {
            this.feeds = JSON.parse(existedFeeds) || [];
        });
    }
    _saveFeedsToLocalStorage() {
        //Kiểu như "giả" private
        AsyncStorage.setItem('@feeds', JSON.stringify(this.feeds));
    }
    addNewFeed(url, feed) {
        this.feeds.push({
            url,
            entry: feed.entry,
            title: feed.title,
            updated: feed.updated
        });
        this._saveFeedsToLocalStorage();
    }
    deleteFeedWithURL(url) {
        this.feeds = this.feeds.filter(feed => feed.url !== url);
        this._saveFeedsToLocalStorage();
    }
    selectFeed(feed) {
        this.selectedFeed = feed;
    }
    selectEntry(entry) {
        this.selectedEntry = entry;
    }
}
const store = new Store();
export default store;