import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useRef, useState } from "react";
import { useOutsideDetector } from "../../Hooks/useOutsideDetector";

const HeaderLink = ({ data, flagTheme }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [flagClickDropDown, setFlagClickDropDown] = useState(false);
  const refDropDown = useRef(0);
  useOutsideDetector([refDropDown], () => setFlagClickDropDown(false));

  return (
    <StyledComponent ref={refDropDown}>
      {data.flagSubLink ? (
        <LinkMainText
          color={theme.palette.link.main}
          onClick={() => {
            setFlagClickDropDown(!flagClickDropDown);
          }}
        >
          <Box display={"flex"}>{data.name}</Box>
          <IconDown color={theme.palette.link.main}>
            {!flagClickDropDown ? (
              <MdKeyboardArrowDown />
            ) : (
              <MdKeyboardArrowUp />
            )}
          </IconDown>
          {!flagClickDropDown ? (
            <></>
          ) : (
            <SectionDropDown
              length={data.subLink.length}
              bgcolor={
                flagTheme === "dark"
                  ? "rgba(30, 33, 52, 0.56)"
                  : "rgba(30, 33, 52, 0.04)"
              }
              border={
                flagTheme === "dark"
                  ? "1px solid rgba(255, 255, 255, 0.08)"
                  : "1px solid rgba(30, 33, 52, 0.08)"
              }
            >
              {data.subLink.map((each, index) => {
                return (
                  <EachText
                    color={theme.palette.link.main}
                    key={index}
                    onClick={() => {
                      navigate(each.link);
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                  >
                    {each.name}
                  </EachText>
                );
              })}
            </SectionDropDown>
          )}
        </LinkMainText>
      ) : (
        <LinkMainText
          color={theme.palette.link.main}
          onClick={() => {
            navigate(data.link);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          {data.name}
        </LinkMainText>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
  user-select: none;
`;

const LinkMainText = styled(Box)`
  display: flex;
  position: relative;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  letter-spacing: 0.01em;
  margin-left: 20px;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    color: #ea4694;
  }
`;

const IconDown = styled(Box)`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);

  border-radius: 6px;
  font-size: 1.3rem;
  margin-left: 8px;
`;

const SectionDropDown = styled(Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0px;
  bottom: ${({ length }) => (length ? length * -25 - 32 - 10 + "px" : "")};
  padding: 16px 40px 16px 16px;
  width: max-content;
  backdrop-filter: blur(8px);

  border-radius: 6px;
  z-index: 100;
`;

const EachText = styled(Box)`
  display: flex;
  width: 100%;
  height: 25px;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  /* identical to box height, or 14px */

  letter-spacing: 0.01em;
  /* margin-bottom: 16px; */
  transition: 0.3s;
  &:hover {
    color: #ea4694;
  }
`;

export default HeaderLink;
