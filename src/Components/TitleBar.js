import React from "react";

const TitleBar = () => {
  const styles = { background: "#2ecc71", height: "40px", color: "#fff" };
  return (
    <div style={styles}>
      <h3>
        <span>
          <i className="arrow left icon"></i>
        </span>
        Users
      </h3>
    </div>
  );
};

export default TitleBar;
