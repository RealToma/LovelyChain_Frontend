import { useState, useMemo } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Data/Theme";
import imgMainBack from "./Assets/Images/Background/mainBack.png";

const App = () => {
  const [flagTheme, setFlagTheme] = useState("light");

  const theme = useMemo(() => {
    createTheme(flagTheme === "light" ? lightTheme : darkTheme);
  }, [flagTheme]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <StyledComponent bgcolor={secondary.back}>
          123
          <Header flagTheme={flagTheme} setFlagTheme={setFlagTheme} />
          {/* <Routes><Route path="/" element={<Content />} /></Routes> */}
          <Footer />
        </StyledComponent>
      </BrowserRouter>
    </ThemeProvider>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* mix-blend-mode: color; */

  /* overflow-y: auto; */
`;

export default App;
