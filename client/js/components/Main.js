import React from "react";
import Navbar from "./NavBar";
import SearchLocation from "./SearchLocation";
import GoogleMap from "./GoogleMap";
import PhotoContainer from "./PhotoContainer";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Santa Monica, CA, USA',
      currentLat: 34.0195,
      currentLng: -118.4912
    }
  }

  searchAddress = (address) => {
    GMaps.geocode({
      address: address,
      callback: (results, status) => {
        if (status !== 'OK') return;
        console.log("this is results", results[0]);
        this.setState({
          address: results[0].formatted_address,
          currentLat: results[0].geometry.location.lat(),
          currentLng: results[0].geometry.location.lng()
        })
      }
    });
  };

  getCurrentLocation = () => {
    GMaps.geolocate({
      success:(position) => {
        console.log('this is position', position)
        this.setState({
          currentLat: position.coords.latitude,
          currentLng: position.coords.longitude
        })
      },
      error:(error) => {
        alert('Geolocation failed: '+error.message);
      },
      not_supported:() => {
        alert("Your browser does not support geolocation");
      },
      always:() => {
        let locationParams = this.state.currentLat + "," + this.state.currentLng
        this.searchAddress(locationParams);
        //add spinner
        return
      }
    });
  };

  render() {
    return(
      <div>
        <Navbar/>
        <SearchLocation onSearch={this.searchAddress} onGetLocation={this.getCurrentLocation}/>
        <GoogleMap lat={this.state.currentLat} lng={this.state.currentLng} address={this.state.address} />
        <PhotoContainer/>
      </div>
    )
  }
};
