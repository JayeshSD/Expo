import React from "react";
import ContactsContainer from "./Components/ContactsContainer";
import TitleBar from "./Components/TitleBar";

const App = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <TitleBar />
      <h4 style={{ textAlign: "center" }}>List of Users</h4>
      <ContactsContainer />
    </div>
  );
};
export default App;
