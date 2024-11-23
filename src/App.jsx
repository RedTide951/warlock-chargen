import "./App.css";
import Layout from "./components/Layout";
import ButtonAppBar from "./components/ButtonAppBar.jsx";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [characterData, setCharacterData] = useState(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <ButtonAppBar setCharacterData={setCharacterData} />
        <div>
          <Layout characterData={characterData} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
