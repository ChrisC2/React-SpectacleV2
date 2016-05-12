import React from "react";
import ReactDOM from "react-dom";

export default class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    console.log('this is props', this.props)
  }

  componentDidMount() {
    this.componentDidUpdate();
  }
  componentDidUpdate = () => {
    console.log('updated')
    console.log('this is props updated', this.props)
    var map = new GMaps({
			el: '#map',
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
      <div id="map"></div>
    )
  }
}

GoogleMap.defaultProps = {
  initialZoom: 6,
  lat: 53.5333,
  lng: -113.4073126
}
