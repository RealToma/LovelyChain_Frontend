// import { ReactNode } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import imgMainBackDark from "../Assets/Images/Background/mainBack_Dark.png";
import Lottie from "react-lottie";
import animationBackData from "../Assets/Animation/donuts.json";
// import imgMainBackLight from "../Assets/Images/Background/mainBack_Light.png";

const Layout = ({ children }) => {
  const theme = useTheme();
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: animationBackData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledComponent bgcolor={theme.palette.secondary.main}>
      <MaxComponet>{children}</MaxComponet>
      <ImgBack>
        {/* <img src={imgMainBackDark} height={"100%"} alt="imgBack" /> */}
        <Lottie options={defaultLottieOptions} height={"100%"} width={"100%"} />
      </ImgBack>
    </StyledComponent>
  );
};

// Layout.propTypes = {
//   children: ReactNode,
// };

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

  transition: all 0.5s;
  @media (max-width: 1024px) {
    padding: 0px 50px;
  }
  @media (max-width: 768px) {
    padding: 0px 30px;
  }
  @media (max-width: 425px) {
    padding: 0px 16px;
  }
`;

const ImgBack = styled(Box)`
  display: flex;
  position: absolute;
  height: 1200px;
  top: 0px;
  right: 0px;
  z-index: 0;

  transition: all 0.5s;
  @media (max-width: 1440px) {
    height: 900px;
  }
  @media (max-width: 768px) {
    height: 700px;
  }
  @media (max-width: 500px) {
    height: 500px;
  }
  @media (max-width: 390px) {
    height: 400px;
  }
`;

export default Layout;
