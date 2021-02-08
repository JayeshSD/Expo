import React from "react";
import ContactsContainer from "./Components/ContactsContainer";
import TitleBar from "./Components/TitleBar";

const App = () => {
  return (
    <div style={{ background: "#ecf0f1" }}>
      <TitleBar />
      <div>
        <ContactsContainer />
      </div>
    </div>
  );
};
export default App;
