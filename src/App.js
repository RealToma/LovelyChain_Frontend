import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./Data/Theme";
import Dashboard from "./Pages/Dashboard";
import Accounts from "./Pages/Accounts";
import Blocks from "./Pages/Blocks/Blocks";
import BlockDetails from "./Pages/Blocks/BlockDetails";

const App = () => {
  const [flagTheme, setFlagTheme] = useState("dark");

  return (
    <ThemeProvider theme={flagTheme === "dark" ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Layout>
          <Header flagTheme={flagTheme} setFlagTheme={setFlagTheme} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/blocks" element={<Blocks />} />
            <Route path="/blockdetails" element={<BlockDetails />} />
          </Routes>
          <Footer />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
