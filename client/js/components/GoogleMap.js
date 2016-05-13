import React from "react";
import ReactDOM from "react-dom";
import CurrentLocation from "./CurrentLocation"

export default class GoogleMap extends React.Component {

  componentDidMount() {
    this.componentDidUpdate();
  }

  shouldComponentUpdate(nextProps){
    console.log('inside')
    return this.props !== nextProps;
  }

  componentDidUpdate = () => {
    let map = new GMaps({
			el: '#map',
      zoom: 11,
			lat: this.props.lat,
			lng: this.props.lng
		});

		map.addMarker({
			lat: this.props.lat,
			lng: this.props.lng
		});
  }

  render() {
    return(
      <div className="map-container">
        <div id="map"></div>
        <CurrentLocation location={this.props.address}/>
      </div>

    )
  }
}
