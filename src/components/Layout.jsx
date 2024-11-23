import React from "react";
import DenseTable from "./DenseTable";
import CharDetailsTable from "./CharDetailsTable";

const layoutStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "10px",
  backgroundColor: "#0e1214",
  /*  backgroundImage:
    "url('https://i.pinimg.com/originals/7f/3c/9b/7f3c9b2c8f9ad06599cdc3b0bd440fac.jpg')", */
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  minHeight: "100vh",
};

const childStyle = {
  flex: 1,
  maxWidth: "48%",
};

const layout = ({ characterData }) => {
  return (
    <div style={layoutStyle}>
      <div style={childStyle}>
        <CharDetailsTable characterData={characterData} />
      </div>
      <div style={childStyle}>
        <DenseTable characterData={characterData} />
      </div>
    </div>
  );
};

export default layout;
