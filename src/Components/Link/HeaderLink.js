import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const HeaderLink = ({ data }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <StyledComponent>
      {!data.flagSubLink ? (
        <LinkMainText
          color={theme.palette.link.main}
          onClick={() => {
            navigate.push(data.link);
          }}
        >
          {data.name}
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
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
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

export default HeaderLink;
