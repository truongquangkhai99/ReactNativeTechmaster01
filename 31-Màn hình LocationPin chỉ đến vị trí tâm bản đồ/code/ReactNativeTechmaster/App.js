/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import MapView from 'react-native-maps';
import GeoCoder from 'react-native-geocoder';
import LocationSearch from './components/LocationSearch';
import LocationPin from './components/LocationPin';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carLocations: [
        {
          rotation: -80,
          latitude: 21.013878,//Phố Thể Giao, Hà Nội
          longitude: 105.847565,
        }, 
        {
          rotation: 0,//ngược chiều kim đồng hồ
          latitude: 21.017109,//Phố Trần Nhân Tông, Hà Nội
          longitude: 105.847006,
        },
        {
          rotation: 0,
          latitude: 21.015161,//Phố Tuệ Tĩnh, Hà Nội
          longitude: 105.849512,
        },
      ]
    };
    this.initialRegion = {
      latitude: 21.015208,
      longitude: 105.847244,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    };
  } 
  mapLocationToMarker = (carLocation, index) => (<MapView.Marker 
    key={index}
    coordinate={carLocation}
  >
    <Animated.Image 
      source={require('./images/car.png')}
      style={{
        transform: [{ rotate: `${carLocation.rotation}deg` }],
      }}
    />
  </MapView.Marker>)
  _onRegionChange = (region) => {    
    this.setState({ geocodePosition: null });    
    this.timeoutId = setTimeout(async () => {
      try {
        const response = await GeoCoder.geocodePosition({
          lat: region.latitude,
          lng: region.longitude,
        });
        this.setState({ geocodePosition: response[0] });
        // alert(`this.state.geocodePosition = 
            // ${JSON.stringify(this.state.geocodePosition)}`); 
        
      } catch (err) {
        // console.log(err);
      }
    }, 2000);
  }
  _handleBooking = () => {
    alert("Bạn bấm \"Chọn địa điểm\" ");
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={styles.fullScreenMap}
          initialRegion={this.initialRegion}
          onRegionChange={this._onRegionChange}
        >         
          {this.state.carLocations.map(this.mapLocationToMarker)} 
        </MapView>
        <LocationSearch
          value={
            this.state.geocodePosition &&
            (this.state.geocodePosition.feature ||
              this.state.geocodePosition.formattedAddress)
          }
        />
        <LocationPin onPress={this._handleBooking.bind(this)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fullScreenMap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
