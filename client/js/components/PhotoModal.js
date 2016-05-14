import React from "react";

import classNames from "classnames";

export default class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
  }

  stopPropagation = (e) => {
    e.stopPropagation();
  }
  render() {
    let modalClass = classNames("modal-container",{"visible": this.props.modalOpen});
    let text = this.props.photoObj && this.props.photoObj.caption ?
      <div className="text-container">{this.props.photoObj.caption.text}{this.props.photoObj.caption.text}{this.props.photoObj.caption.text}{this.props.photoObj.caption.text}{this.props.photoObj.caption.text}</div>
      :
      "";

    return(
      this.props.modalOpen ?
        <div className={modalClass} onClick={this.props.closeModal}>
          <img className="modal-img" src={this.props.photoObj.images.standard_resolution.url}/>
          <div className="content-container">
              <a id="username" href={"https://www.instagram.com/" + this.props.photoObj.user.username} onClick={this.stopPropagation}>
                @{this.props.photoObj.user.username}
              </a>
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
