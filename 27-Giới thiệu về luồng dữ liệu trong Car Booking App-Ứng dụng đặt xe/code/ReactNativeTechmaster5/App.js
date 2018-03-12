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
import { logAlert, logString } from './Log';
import LocationSearch from './components/LocationSearch';
import LocationPin from './components/LocationPin';
import ConfirmationModal from './components/ConfirmationModal';
import CarTypeSelection from './components/CarTypeSelection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carLocations: [
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
        {
          rotation: -80,
          latitude: 21.013878,//Phố Thể Giao, Hà Nội
          longitude: 105.847565,
        },]
    };
    this.initialRegion = {
      latitude: 21.015208,
      longitude: 105.847244,
      latitudeDelta: 0.00922,
      longitudeDelta: 0.00421,
    };
    // this._onRegionChange.call(this, this.initialRegion);
  }  
  componentDidMount() {    
    this._onRegionChange(this.initialRegion);        
    this.setState({ showConfirmationModal: false });    
  } 
  mapLocationToMarker = (carLocation, index) => (<MapView.Marker key={index} coordinate={carLocation}>
    <Animated.Image
      style={{
        transform: [{ rotate: `${carLocation.rotation}deg` }],
      }}
      source={require('./images/car.png')}
    />
  </MapView.Marker>)

  _onRegionChange = (region) => {    
    this.setState({ geocodePosition: null });    
    if (this.timeoutId) clearTimeout(this.timeoutId);        
    this.timeoutId = setTimeout(async () => {
      try {
        const response = await GeoCoder.geocodePosition({
          lat: region.latitude,
          lng: region.longitude,
        });
        this.setState({ geocodePosition: response[0] });        
        logString("this.state.geocodePosition = ", this.state.geocodePosition);        
      } catch (err) {
        // console.log(err);
      }
    }, 2000);
  }
  _handleBooking = () => {
    // alert("Bạn bấm \"Chọn địa điểm\" ");
    this.setState({ showConfirmationModal: true });
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
        <CarTypeSelection />
        <ConfirmationModal
          visible={this.state.showConfirmationModal}
          onClose={() => {
            this.setState({ showConfirmationModal: false });
          }}
        />
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