import { ReactNode } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgMainBack from "../Assets/Images/Background/mainBack.png";

const Layout = ({ children }) => {
  const theme = useTheme();

  return (
    <StyledComponent bgcolor={theme.palette.secondary.main}>
      <MaxComponet>{children}</MaxComponet>
      <ImgBack>
        <img src={imgMainBack} width={"100%"} alt="imgBack" />
      </ImgBack>
    </StyledComponent>
  );
};

Layout.propTypes = {
  children: ReactNode,
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  /* overflow-y: auto; */
`;

const MaxComponet = styled(Box)`
  display: flex;
  position: relative;
  max-width: 1440px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  /* mix-blend-mode: color; */
  padding: 0px 70px;
  box-sizing: border-box;
  z-index: 1;
  
`;

const ImgBack = styled(Box)`
  display: flex;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  z-index: 0;
`;


export default Layout;