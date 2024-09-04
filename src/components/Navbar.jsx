// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme(); // Access the theme

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: theme.palette.secondary.main }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <Button color="inherit" href="#home">
          Hem
        </Button>
        <Button color="inherit" href="#about">
          About Me
        </Button>
        <Button color="inherit" href="#projects">
          Projects
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
        <Button color="inherit" href="#cv">
          CV
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
