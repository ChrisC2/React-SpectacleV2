import React from "react";

export default class Photo extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <img src={this.props.src}
        onClick={this.props.selectPhoto}
      />
    )
  }
}
