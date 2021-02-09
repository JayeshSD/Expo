import { connect } from "react-redux";
import React, { Component } from "react";
import Contact from "./Contact";
import FullContactDetails from "./FullContactDetails";
import { fetchUsers, showUser } from "../Redux/actions/userActions";

class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.showUserDetails = this.showUserDetails.bind(this);
  }
  componentDidMount() {
    this.props.fetchUsers();
  }
  showUserDetails(user) {
    this.setState({ userDetails: user });
    this.props.showUser(user);
  }
  render() {
    const { users, loading, userDetails, showUserDetails } = this.props.users;
    if (loading) {
      return <div>No Users Found!!!</div>;
    } else {
      let usersList = [];
      {
        users.forEach((user) =>
          usersList.push(
            <Contact
              handleClick={() => this.showUserDetails(user)}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              image={user.picture.large}
              key={`${user.name.first} ${user.name.last}`}
            />
          )
        );
      }
      let output = !this.props.users.showUserDetails ? usersList : <FullContactDetails userDetails={userDetails} />;

      return (
        <div style={{ padding: "10px" }} className="ui list">
          {!showUserDetails ? <h4 style={{ textAlign: "center" }}>List of Users</h4> : null}
          {output}
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userState,
  };
};

export default connect(mapStateToProps, { fetchUsers, showUser })(ContactsContainer);
