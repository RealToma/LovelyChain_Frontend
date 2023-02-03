import { useState } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import imgLogoMark from "../Assets/Images/Icon/logoMark.png";
import { FaMoon } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { MdMenu, MdClose } from "react-icons/md";
import { dataLink } from "../Data/Link";
import HeaderLink from "../Components/Link/HeaderLink";
import { useNavigate } from "react-router-dom";

const Header = ({ flagTheme, setFlagTheme }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [flagOpenModal, setFlagModalOpen] = useState(false);
  const handleOpenModal = () => setFlagModalOpen(true);
  const handleCloseModal = () => setFlagModalOpen(false);

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
          justifyContent={"flex-end"}
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
          color={flagTheme === "dark" ? "#ffffff" : "#171929"}
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
      <SectionMobileMenu>
        <IconMenu color={flagTheme === "dark" ? "white" : "#171929"}>
          <BiSearch />
        </IconMenu>
        <IconMenu
          color={flagTheme === "dark" ? "white" : "#171929"}
          onClick={() => handleOpenModal()}
        >
          <MdMenu />
        </IconMenu>
      </SectionMobileMenu>
      <Modal
        open={flagOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        BackdropComponent={CustomBackdrop}
      >
        <ModalComponent bgcolor={theme.palette.secondary.main}>
          <SectionLogoMark
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img
              src={imgLogoMark}
              width={"100%"}
              height={"100%"}
              alt="logoMark"
            />
          </SectionLogoMark>
          <SectionMobileLink>
            {dataLink.map((each, index) => {
              if (each.flagSubLink === false) {
                return (
                  <TextMobileLinkMain
                    color={theme.palette.link.main}
                    key={index}
                    onClick={() => {
                      handleCloseModal();
                      navigate(each.link);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    {each.name}
                  </TextMobileLinkMain>
                );
              } else {
                return (
                  <SectionMobileSubLink>
                    <TextMobileLinkMain
                      color={theme.palette.link.main}
                      key={index}
                    >
                      {each.name}
                    </TextMobileLinkMain>
                    {each.subLink.map((each, index) => {
                      return (
                        <TextMobileSublink
                          color={theme.palette.link.main + 80}
                          key={index}
                          onClick={() => {
                            handleCloseModal();
                            navigate(each.link);
                            window.scrollTo({
                              top: 0,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                        >
                          {each.name}
                        </TextMobileSublink>
                      );
                    })}
                  </SectionMobileSubLink>
                );
              }
            })}
          </SectionMobileLink>
          {flagTheme === "dark" ? (
            <ButtonMobileThemeSwitchDark
              onClick={() => {
                setFlagTheme(flagTheme === "dark" ? "light" : "dark");
              }}
            >
              <FaMoon />
            </ButtonMobileThemeSwitchDark>
          ) : (
            <ButtonMobileThemeSwitchLight
              bgcolor={theme.palette.secondary.main + 56}
              onClick={() => {
                setFlagTheme(flagTheme === "dark" ? "light" : "dark");
              }}
              justifyContent={"flex-end"}
            >
              <IconLight></IconLight>
            </ButtonMobileThemeSwitchLight>
          )}
          <IconClose
            color={theme.palette.link.main}
            onClick={() => handleCloseModal()}
          >
            <MdClose />
          </IconClose>
        </ModalComponent>
      </Modal>
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
  user-select: none;
  cursor: pointer;

  transition: all 0.5s;
  @media (max-width: 390px) {
    width: 180px;
  }
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

  transition: all 0.5s;
  @media (max-width: 1440px) {
    display: none;
  }
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

  transition: all 0.5s;
  @media (max-width: 1440px) {
    display: none;
  }
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

  transition: all 0.5s;
  @media (max-width: 1440px) {
    display: none;
  }
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

  transition: all 0.5s;
  @media (max-width: 1440px) {
    display: none;
  }
`;

const SectionMobileMenu = styled(Box)`
  display: none;

  transition: all 0.5s;
  @media (max-width: 1440px) {
    display: flex;
  }
`;

const IconMenu = styled(Box)`
  display: flex;
  font-size: 1.5rem;
  margin-left: 25px;
  user-select: none;
  cursor: pointer;
`;

const ModalComponent = styled(Box)`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  width: 400px;
  height: 100vh;
  flex-direction: column;
  backdrop-filter: blur(100px) !important;
  padding: 30px;
  box-sizing: border-box;
  overflow-y: auto;
  transition: box-shadow 300ms;
  transition: transform 505ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  outline: none;
  animation: back_animation1 0.5s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  @keyframes back_animation1 {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 390px) {
    width: 320px;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`;

const IconClose = styled(Box)`
  position: fixed;
  right: 20px;
  top: 30px;
  font-size: 1.6rem;

  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ea4694;
  }
`;

const SectionMobileLink = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
`;

const TextMobileLinkMain = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  letter-spacing: 0.01em;
  margin-top: 25px;
`;

const SectionMobileSubLink = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextMobileSublink = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16x;
  line-height: 100%;
  /* identical to box height, or 14px */

  letter-spacing: 0.01em;
  margin-top: 12px;
  margin-left: 20px;
`;

const ButtonMobileThemeSwitchDark = styled(Box)`
  display: flex;
  position: fixed;
  left: 30px;
  bottom: 50px;
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

  transition: all 0.5s;
`;

const ButtonMobileThemeSwitchLight = styled(Box)`
  display: flex;
  position: fixed;
  left: 30px;
  bottom: 50px;
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

export const CustomBackdrop = styled(Box)`
  width: 100%;
  height: 100%;
  position: fixed;
  background: black;
  opacity: 0.6;
`;

export default Header;
