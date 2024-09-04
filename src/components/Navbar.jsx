// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
        <Button color="inherit" href="#home">
          Hem
        </Button>
        <Button color="inherit" href="#about">
          Om Mig
        </Button>
        <Button color="inherit" href="#projects">
          Projekt
        </Button>
        <Button color="inherit" href="#contact">
          Kontakta
        </Button>
        <Button color="inherit" href="#cv">
          CV
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
