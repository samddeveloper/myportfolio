// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";

import ThemeWrapper from "./theme/ThemeWrapper";

const App = () => {
  return (
    <ThemeWrapper>
      <div>
        <Navbar />
        <div style={{ paddingTop: "40px" }}>
          {" "}
          {/* Add a small top padding */}
          {/* <Intro />
          <Logos />
          <AboutMe />
          <Projects />
          <ContactMe /> */}
        </div>
      </div>
    </ThemeWrapper>
  );
};

export default App;
