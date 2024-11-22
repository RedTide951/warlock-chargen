import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Layout from "./components/Layout";
import charGenScript from "./data/script";
import { useState } from "react";

function App() {
  const [characterData, setCharacterData] = useState(null);

  const handleRunScript = () => {
    const data = charGenScript();
    setCharacterData(data);
  };

  return (
    <div className="App">
      <Button variant="outlined" onClick={handleRunScript}>
        Run Script
      </Button>
      <div>
        <Layout characterData={characterData} />
      </div>
    </div>
  );
}

export default App;
