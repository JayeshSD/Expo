import React, { Component } from "react";
import { connect } from "react-redux";
import { hideUser } from "../Redux/actions/userActions";

class TitleBar extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.hideUser();
  }

  render() {
    const styles = { background: "#2ecc71", height: "40px", color: "#fff" };
    return (
      <div style={styles}>
        <h3>
          <span onClick={this.handleClick}>
            <i className="arrow left icon"></i>
          </span>
          {this.props.users.showUserDetails ? "User Details" : "Users"}
        </h3>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userState,
  };
};

export default connect(mapStateToProps, { hideUser })(TitleBar);
