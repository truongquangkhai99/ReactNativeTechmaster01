/*
Khoá học: React Native qua các ứng dụng thực tế  
https://techmaster.vn/
*/
import store from './store';
import xml2json from 'simple-xml2json';

//Gửi request lấy thông tin một url chứa RSS Feed
export async function fetchFeed(url) {
    const response = await fetch(url);
    const xml = await response.text();
    const json = xml2json.parser(xml);
    return {
        entry:
            (json.feed && json.feed.entry) || (json.rss &&
                json.rss.channel.item), 
        title:
            (json.feed && json.feed.title) || (json.rss &&
                json.rss.channel.title),
        updated: (json.feed && json.feed.updated) || '',           
    }
}

export function addNewFeed(url, feed) {
    store.addNewFeed(url, feed);
}
//Chọn 1 feed
export function selectFeed(feed) {
    store.selectFeed(feed);
}
//Chọn 1 entry
export function selectEntry(entry) {
    store.selectEntry(entry);
}
