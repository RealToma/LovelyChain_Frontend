import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableDashboardTransHistory from "../../Components/Table/TableDashboardTransHistory";
import { dataTransactions } from "../../Data/Table";

const TransactionPending = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <TextSubject color={theme.palette.link.main}>
        Pending Transactions
      </TextSubject>
      <TableDashboardTransHistory data={dataTransactions.slice(0, 8)} />
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
  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export default TransactionPending;
