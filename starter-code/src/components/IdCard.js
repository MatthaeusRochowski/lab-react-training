import React, { Component } from "react";

export default class IdCard extends Component {
  render() {
    return (
      <div className="card-container">
        <img src= {this.props.picture} alt='bla'/>
    <div className="card-data">
        <span><b>First Name: </b>{this.props.firstName}</span>
        <span><b>Last Name: </b>{this.props.lastName}</span>
        <span><b>Gender: </b>{this.props.gender}</span>
        <span><b>Height:</b> {this.props.height}</span>
        <span><b>Birth: </b>{this.props.birth.toDateString()}</span>
        </div>
      </div>
    );
  }
}


