import React, { Component } from "react";
import Contact from "./Contact";
import API from "./utils/API";

class ContactsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: false,
      numContacts: 100,
    };
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let userData = await API.get("/", {
      params: {
        results: this.state.numContacts,
      },
    });
    console.log(userData.data.results);
    this.setState({ users: [...userData.data.results], loading: false });
    console.log(this.state.users);
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <div>No users found</div>;
    } else {
      let usersList = [];
      {
        users.forEach((user) =>
          usersList.push(
            <Contact
              name={`${user.name.first} ${user.name.last}`}
              email={user.email}
              image={user.picture.large}
              key={`${user.name.first} ${user.name.last}`}
            />
          )
        );
      }
      return (
        <div style={{ padding: "10px" }} className="ui list">
          {usersList}
        </div>
      );
    }
  }
}

export default ContactsContainer;
