import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const StatsComponent = ({ data, index }) => {
  const theme = useTheme();

  return (
    <StyledComponent
      style={{
        backgroundImage: index !== 0 ? theme.palette.stats[index].back : "",
      }}
      bgcolor={index === 0 ? "rgba(234, 70, 148, 0.96)" : ""}
      border={theme.palette.stats[index].border}
      boxShadow={theme.palette.stats[index].shadow}
    >
      <TextName color={theme.palette.link.main + 48}>{data.text}</TextName>
      <TextValue
        color={index === 0 ? "white" : theme.palette.stats[index].color}
      >
        {data.value}
      </TextValue>
      <ImgIcon>
        <img src={data.icon} width={"100%"} height={"100%"} alt="icon" />
      </ImgIcon>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 236px;
  height: 175px;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 32px;
  box-sizing: border-box;
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
  cursor: pointer;
`;

const TextName = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  letter-spacing: 0.01em;
`;

const TextValue = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 100%;
  /* identical to box height, or 40px */

  letter-spacing: 0.01em;
  margin-top: 8px;
`;

const ImgIcon = styled(Box)`
  display: flex;
  position: absolute;
  left: 23px;
  top: -33px;
  width: 104px;
  height: 104px;
`;

export default StatsComponent;
