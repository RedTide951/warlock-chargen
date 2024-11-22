import React from "react";
import DenseTable from "./DenseTable";

const layout = ({ characterData }) => {
  return (
    <div>
      <DenseTable characterData={characterData} />
    </div>
  );
};

export default layout;
