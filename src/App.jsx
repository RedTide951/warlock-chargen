import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Layout from "./components/Layout";
import charGenScript from "./data/script";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="outlined" onClick={charGenScript}>
          Run Script
        </Button>
        <Layout />
      </header>
    </div>
  );
}

export default App;
