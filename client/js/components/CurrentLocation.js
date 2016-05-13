import React from "react";

export default class CurrentLocation extends React.Component {
  render() {
    return (
      <div className="loc-container">
        {this.props.location}
      </div>
    )
  }
}
