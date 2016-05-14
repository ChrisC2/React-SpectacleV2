import React from "react";

import classNames from "classnames";

export default class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let modalClass = classNames("modal-container",{"visible": this.props.modalOpen});
    let text = this.props.photoObj && this.props.photoObj.caption ?
      <div className="text-container">{this.props.photoObj.caption.text}</div>
      :
      "";

    return(
      this.props.modalOpen ?
        <div className={modalClass} onClick={this.props.closeModal}>
          <img className="modal-img" src={this.props.photoObj.images.standard_resolution.url}/>
          <div className="content-container">
              <div id="username">@{this.props.photoObj.user.username}</div>
              <div>
                <span className="glyphicon glyphicon-heart icon" aria-hidden="true"></span>
                {this.props.photoObj.likes.count + " "} likes
              </div>
              {text}
          </div>
        </div>
        :
        <div className={modalClass}></div>
    )
  }
}
