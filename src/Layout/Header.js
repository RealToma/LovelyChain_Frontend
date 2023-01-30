import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();

  return <StyledComponent></StyledComponent>;
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
`;

export default Header;
