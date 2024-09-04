// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00040D",
    },
    secondary: {
      main: "#705cef",
    },
    accent: {
      default: "#FF9A78",
    },
    text: {
      primary: "#F2F2F2",
      secondary: "#C7C7C9",
    },
  },
});

export default theme;
