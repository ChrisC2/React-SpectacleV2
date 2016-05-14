import React from "react";
import Photo from "./Photo"

export default class PhotoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }

  componentDidMount = () => {
    console.log('photocontainer mounted')
    let lat = this.props.lat;
    let lng = this.props.lng
    this.getPhotos(lat, lng);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.lat !== nextProps.lat && this.props.lng !== nextProps.lng) {
      console.log('changed')
      let lat = nextProps.lat;
      let lng = nextProps.lng
      this.getPhotos(lat,lng)
    } else {
      return
    }
  }

  getPhotos = (lat, lng) => {
    console.log('called')
    fetch('/igcall?lat=' + lat + '&lng=' + lng)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          photos: json.data
        })

      })
      .catch((ex) => {
    console.log('parsing failed', ex)
    })
  }
  selectPhoto = (obj) => {
    this.props.selectPhoto(obj);
  }

  render() {
    let photos = this.state.photos.map((obj, index) => {
      return(
        <Photo key={index}
          src={obj.images.standard_resolution.url}
          selectPhoto={this.selectPhoto.bind(this, obj)}
        />
      )
    })
    return (
      <div className="photo-container">
      {photos}
      </div>
    )
  }
}
