import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgLogoMark from "../Assets/Images/Icon/logoMark.png";
import { FaMoon } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { dataLink } from "../Data/Link";
import HeaderLink from "../Components/Link/HeaderLink";
import { useNavigate } from "react-router-dom";

const Header = ({ flagTheme, setFlagTheme }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <StyledComponent>
      <SectionLogoMark
        onClick={() => {
          navigate("/");
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img src={imgLogoMark} width={"100%"} height={"100%"} alt="logoMark" />
      </SectionLogoMark>
      {flagTheme === "dark" ? (
        <ButtonThemeSwitchDark
          onClick={() => {
            setFlagTheme(flagTheme === "dark" ? "light" : "dark");
          }}
        >
          <FaMoon />
        </ButtonThemeSwitchDark>
      ) : (
        <ButtonThemeSwitchLight
          bgcolor={theme.palette.secondary.main + 56}
          onClick={() => {
            setFlagTheme(flagTheme === "dark" ? "light" : "dark");
          }}
        >
          <IconLight></IconLight>
        </ButtonThemeSwitchLight>
      )}

      <SectionSearch>
        <IconSearch color={flagTheme === "dark" ? "white" : "#171929"}>
          <BiSearch />
        </IconSearch>
        <InputSearch
          component={"input"}
          type={"text"}
          placeholder={"Search by address, txn hash..."}
          color={flagTheme === "dark" ? "#ffffff48" : "#17192948"}
          style={{
            "::placeholder": `color:${
              theme === "dark" ? "#ffffff48" : "#17192948"
            }`,
          }}
        />
      </SectionSearch>
      <LinkGroup>
        {dataLink.map((each, index) => {
          return <HeaderLink data={each} key={index} flagTheme={flagTheme} />;
        })}
      </LinkGroup>
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
  user-select: none;
  cursor: pointer;
`;

const ButtonThemeSwitchDark = styled(Box)`
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
  color: #ea4694;
  font-size: 1.1rem;
  cursor: pointer;
`;

const ButtonThemeSwitchLight = styled(Box)`
  display: flex;
  width: 54px;
  height: 30px;
  background: rgba(30, 33, 52, 0.04);
  border: 1px solid rgba(23, 25, 41, 0.16);
  /* Light mode */

  box-shadow: inset 0px 0px 32px rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 100px;
  align-items: center;
  padding: 0px 6px;
  box-sizing: border-box;
  justify-content: flex-end;
  cursor: pointer;
`;

const IconLight = styled(Box)`
  width: 19px;
  height: 19px;
  border-radius: 100%;
  background: #ea4694;
`;

const SectionSearch = styled(Box)`
  display: flex;
  align-items: flex-start;
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

  ::placeholder {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    letter-spacing: 0.01em;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    letter-spacing: 0.01em;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    letter-spacing: 0.01em;
  }
`;

const LinkGroup = styled(Box)`
  display: flex;
  align-items: center;
`;

export default Header;
