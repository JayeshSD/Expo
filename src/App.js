import React, { Component } from "react";
import { Provider } from "react-redux";
import ContactsContainer from "./Components/ContactsContainer";
import store from "./Redux/store";
import TitleBar from "./Components/TitleBar";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ background: "#ecf0f1" }}>
          <TitleBar />
          <div>
            <ContactsContainer />
          </div>
        </div>
      </Provider>
    );
  }
}
export default App;
