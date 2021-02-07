import API from "../Components/utils/API";
import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  render() {
    const { image, name, email } = this.props;
    return (
      <div className="item ui segment Contact">
        <img className="ui avatar tiny image" src={image} />
        <div className="content">
          <a className="header">{name}</a>
          <div className="description">{email}</div>
        </div>
      </div>
    );
  }
}

export default Contact;
