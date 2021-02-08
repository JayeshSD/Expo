import React, { Component } from "react";
import "./FullContactDetails.css";

export class FullContactDetails extends Component {
  render() {
    console.log(this.props.userDetails);
    const { userDetails } = this.props;
    const { picture, name, login, email, location, dob, phone, cell } = userDetails;
    return (
      <div style={{ textAlign: "center" }}>
        <img src={picture.large} />
        <div>
          <h3 style={{ margin: "2px" }}>Account Details</h3>
          <h4>{`${name.first} ${name.last}`}</h4>
          <p>{login.username}</p>
          <p>{email}</p>
        </div>
        <div style={{ margin: "10px" }}>
          <h3>Address</h3>
          <p>City: {location.city}</p>
          <p>Country: {location.country}</p>
          <p>State: {location.state}</p>
        </div>
        <div>
          <h3>Personal Details</h3>
          <p>Age: {dob.age}</p>
          <p>Phone: {phone}</p>
          <p>Mobile: {cell}</p>
        </div>

        <button onClick={this.props.handleClick}>Back</button>
      </div>
    );
  }
}

export default FullContactDetails;
