import React from "react";

export default class SearchLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  ''
    }
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  searchOnClick = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.value);
  }

  getCurrentLocation = (event) => {
    event.preventDefault();
    this.props.onGetLocation();
  }

  render() {
    return(
      <div className="search-container">
        <div className="search input-group">
          <input type="search" className="form-control" placeholder="Search by Location..." onChange={this.handleChange}/>
            <span className="input-group-btn">
              <button className="btn btn-info search-btn" type="button" onClick={this.searchOnClick}>
                <i className="glyphicon glyphicon-search"></i>
              </button>
            </span>
        </div>
      <div className="divide">-OR-</div>
      <button className="btn btn-block btn-location" onClick={this.getCurrentLocation}>Use Current Location</button>
      </div>
    )
  }
}
