import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import charGenScript from "../data/script";

export default function ButtonAppBar({ setCharacterData }) {
  const handleRunScript = () => {
    const data = charGenScript();
    setCharacterData(data);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
          <Typography variant="h5" component="div">
            Warlock! RPG Character Generator
          </Typography>
          <Button
            variant="contained"
            onClick={handleRunScript}
            sx={{ flexGrow: 1, marginLeft: "10rem" }}
          >
            Generate New Character
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
