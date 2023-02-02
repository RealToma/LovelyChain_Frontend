import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableTokens from "../Components/Table/TableTokens";
import { dataTableTokens } from "../Data/Table";

const Tokens = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <TextSubject color={theme.palette.link.main}>Tokens</TextSubject>
      <TableTokens data={dataTableTokens} />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const TextSubject = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;

  letter-spacing: 0.01em;
`;

export default Tokens;
