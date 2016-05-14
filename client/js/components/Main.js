import React from "react";
import Navbar from "./NavBar";
import SearchLocation from "./SearchLocation";
import GoogleMap from "./GoogleMap";
import PhotoContainer from "./PhotoContainer";
import PhotoModal from "./PhotoModal";

import classNames from "classnames";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 'Santa Monica, CA, USA',
      currentLat: 34.0195,
      currentLng: -118.4912,
      modalOpen: false,
      modalPhoto: null
    }
  }

  searchAddress = (address) => {
    GMaps.geocode({
      address: address,
      callback: (results, status) => {
        if (status !== 'OK') return;
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

  setLocation = (lat, lng) => {
    this.setState({
      currentLat: lat,
      currentLng: lng
    })
    let locationParams = lat + "," + lng;
    this.searchAddress(locationParams);
  }

  openModal = (obj) => {
    this.setState({
      modalOpen: true,
      modalPhoto: obj
    })
  }

  closeModal = (e) => {
    this.setState({
      modalOpen: false,
      modalPhoto: null
    })
  }

  render() {

    return(
      <div>
        <Navbar/>

        <GoogleMap
          lat={this.state.currentLat}
          lng={this.state.currentLng}
          address={this.state.address}
          setLocation={this.setLocation}
        />

        <PhotoContainer
          lat={this.state.currentLat}
          lng={this.state.currentLng}
          address={this.state.address}
          selectPhoto={this.openModal}
        />

        <PhotoModal
          modalOpen={this.state.modalOpen}
          photoObj={this.state.modalPhoto}
          closeModal={this.closeModal}
        />

        <SearchLocation
          onSearch={this.searchAddress}
          onGetLocation={this.getCurrentLocation}
        />
      </div>
    )
  }
};
