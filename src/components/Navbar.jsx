// src/components/Navbar.jsx
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static" // Use static to not stick to the top while scrolling
      sx={{
        backgroundColor: theme.palette.secondary.main,
        width: "80%", // Adjust width to 80% of the screen
        margin: "20px auto", // Center the navbar horizontally with margin auto
        borderRadius: "10px", // Add border radius for a smoother look
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional shadow for a polished look
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Sammie Slootman
        </Typography>
        <Button color="inherit">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Hem
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Om Mig
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Projekt
          </Link>
        </Button>
        <Button color="inherit">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            Kontakt
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
