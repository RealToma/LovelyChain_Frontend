import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const HeaderLink = ({ data }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <StyledComponent>
      {!data.flagSubLink ? (
        <LinkMainText
          color={theme.palette.link.main}
          // onClick={() => {
          //   navigate(data.link);
          // }}
        >
          <Box display={"flex"}>{data.name}</Box>
          <IconDown color={theme.palette.link.main}>
            <MdKeyboardArrowDown />
          </IconDown>
        </LinkMainText>
      ) : (
        <LinkMainText color={theme.palette.link.main}>{data.name}</LinkMainText>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
`;

const LinkMainText = styled(Box)`
  display: flex;
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
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 6px;
  font-size: 1.3rem;
  margin-left: 8px;
`;

export default HeaderLink;
