import React from "react";

import classNames from "classnames";

export default class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let modalClass = classNames("modal-container",{"visible": this.props.modalOpen});
    return(
      this.props.modalOpen ?
        <div className={modalClass} onClick={this.props.closeModal}>
          <img className="modal-img" src={this.props.photoObj.images.standard_resolution.url}/>
        </div>
        :
        <div className={modalClass}></div>
    )
  }
}
