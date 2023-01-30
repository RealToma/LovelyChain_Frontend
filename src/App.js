// import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
// import logo from './logo.svg';
// import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <StyledComponent>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
        </Routes>
        <Footer />
      </StyledComponent>
    </BrowserRouter>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export default App;
