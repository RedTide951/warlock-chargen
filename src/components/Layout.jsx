import React from "react";
import DenseTable from "./DenseTable";
import CharDetailsTable from "./CharDetailsTable";

const layout = ({ characterData }) => {
  return (
    <div>
      <DenseTable characterData={characterData} />
      <CharDetailsTable characterData={characterData} />
    </div>
  );
};

export default layout;
