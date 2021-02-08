import React, { Component } from "react";
import Contact from "./Contact";
import FullContactDetails from "./FullContactDetails";
import API from "./utils/API";

class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      numContacts: 100,
      showUser: false,
      userDetails: {},
    };
    this.showUserDetails = this.showUserDetails.bind(this);
    this.hideUserDetails = this.hideUserDetails.bind(this);
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let userData = await API.get("/", {
      params: {
        results: this.state.numContacts,
      },
    });
    // console.log(userData.data.results);
    this.setState({ users: [...userData.data.results], loading: false });
  }

  showUserDetails(user) {
    // console.log(user);
    this.setState({ userDetails: user });
    this.setState({ showUser: true });
    console.log(this.state.userDetails);
  }
  hideUserDetails() {
    this.setState({ showUser: false });
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <div>No users found</div>;
    } else {
      let usersList = [];
      {
        users.forEach((user, i) =>
          usersList.push(
            <Contact
              handleClick={() => this.showUserDetails(user)}
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              image={user.picture.large}
              key={`${user.name.first} ${user.name.last}`}
              fullData={user}
            />
          )
        );
      }
      let output = !this.state.showUser ? (
        usersList
      ) : (
        <FullContactDetails handleClick={this.hideUserDetails} userDetails={this.state.userDetails} />
      );
      return (
        <div style={{ padding: "10px" }} className="ui list">
          {!this.state.showUser ? <h4 style={{ textAlign: "center" }}>List of Users</h4> : null}
          {output}
        </div>
      );
    }
  }
}

export default ContactsContainer;
