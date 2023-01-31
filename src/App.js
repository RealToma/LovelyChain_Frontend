import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Data/Theme";
const App = () => {
  const [flagTheme, setFlagTheme] = useState("dark");

  return (
    <ThemeProvider theme={flagTheme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Layout>
          <Header flagTheme={flagTheme} setFlagTheme={setFlagTheme} />
          {/* <Routes><Route path="/" element={<Content />} /></Routes> */}
          <Footer />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
