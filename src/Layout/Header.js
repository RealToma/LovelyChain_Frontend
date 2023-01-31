import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgLogoMark from "../Assets/Images/Icon/logoMark.png";
import { FaMoon } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const Header = ({ flagTheme, setFlagTheme }) => {
  const theme = useTheme();
  return (
    <StyledComponent>
      <SectionLogoMark>
        <img src={imgLogoMark} width={"100%"} height={"100%"} alt="logoMark" />
      </SectionLogoMark>
      <ButtonThemeSwitch bgcolor={theme.palette.secondary.main + 56}>
        <FaMoon color={theme.palette.primary.main} fontSize={"1.2rem"} />
      </ButtonThemeSwitch>
      <SectionSearch>
        <IconSearch color={theme.palette.secondary.text}>
          <BiSearch />
        </IconSearch>
        <InputSearch
          component={"input"}
          type={"text"}
          placeholder={"Search by address, txn hash..."}
        />
      </SectionSearch>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 96px;
  justify-content: space-between;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: 0.01em;

  color: #ffffff;
`;

const SectionLogoMark = styled(Box)`
  display: flex;
  width: 200px;
  height: 28px;
  cursor: pointer;
`;

const ButtonThemeSwitch = styled(Box)`
  display: flex;
  width: 54px;
  height: 30px;
  background: rgba(30, 33, 52, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.16);
  /* button */

  box-shadow: inset 0px 0px 12px rgba(23, 25, 41, 0.64);
  border-radius: 100px;
  align-items: center;
  padding: 0px 6px;
  box-sizing: border-box;
`;

const SectionSearch = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 50px;
`;

const IconSearch = styled(Box)`
  display: flex;
  font-size: 1.3rem;
`;

const InputSearch = styled(Box)`
  display: flex;
  width: 250px;
  height: 16px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: 0.01em;
  color: #ffffff40;

  ::placeholder {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #ffffff48;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #ffffff48;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: #ffffff48;
  }
`;

export default Header;
