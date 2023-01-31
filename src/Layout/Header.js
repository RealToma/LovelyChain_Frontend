import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgLogoMark from "../Assets/Images/Icon/logoMark.png";

const Header = ({ flagTheme, setFlagTheme }) => {
  const theme = useTheme();
  return (
    <StyledComponent>
      <SectionLogoMark>
        <img src={imgLogoMark} width={"100%"} height={"100%"} alt="logoMark" />
      </SectionLogoMark>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 96px;
  justify-content: space-between;
  align-items: center;
`;

const SectionLogoMark = styled(Box)`
  display: flex;
  width: 200px;
  height: 28px;
`;

export default Header;
