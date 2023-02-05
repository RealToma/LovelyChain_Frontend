import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChartBalance from "../../Components/Chart/ChartBalance";
import { dataTableInternalTransactions } from "../../Data/Table";
import TableCoinBalanceHisotryTransactions from "../../Components/Table/TableCoinBalanceHisotryTransactions";

const CoinBalanceHistory = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <TextSubject color={theme.palette.link.main}>Balances</TextSubject>
      <SectionContent>
        <SectionLeft>
          <SectionBalance>
            <SectoinTextBalance>
              <TextLovely>1,591.69 LOVELY</TextLovely>
              <IconWave color={theme.palette.link.main + 40}>=</IconWave>
              <TextValue color={theme.palette.link.main}>$375.92</TextValue>
            </SectoinTextBalance>
            <SectionTextDate>
              <TextDate color={theme.palette.link.main}>Day</TextDate>
              <TextDate color={theme.palette.link.main}>Week</TextDate>
              <TextDate color={theme.palette.link.main}>Month</TextDate>
              <TextDate color={theme.palette.link.main}>Year</TextDate>
              <TextDate color={theme.palette.link.main}>All</TextDate>
            </SectionTextDate>
          </SectionBalance>
          <SectionChart>
            <ChartBalance
              data={[703, 353, 500, 300, 600, 350, 430, 290, 550, 800]}
              color={theme.palette.link.main}
              height={"100%"}
            />
          </SectionChart>
        </SectionLeft>
        <SectionRight>
          <SectionTransHistory>
            <TableCoinBalanceHisotryTransactions data={dataTableInternalTransactions} />
          </SectionTransHistory>
        </SectionRight>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
`;

const TextSubject = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  letter-spacing: 0.01em;
  
`;

const SectionBalance = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

const SectoinTextBalance = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextLovely = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: 0.01em;

  color: #ea4694;
`;

const TextValue = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.01em;
`;

const SectionTextDate = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextDate = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.01em;
  transition: 0.3s;
  margin-left: 24px;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ea4694;
  }
`;

const IconWave = styled(Box)`
  margin: 0px 16px;
  font-size: 1.5rem;
`;

const SectionChart = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
  height: 400px;
`;

const SectionTransHistory = styled(Box)`
  display: flex;
  margin-top: 24px;
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 2.5;
  flex-direction: column;
  margin-right: 48px;
`;
const SectionRight = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default CoinBalanceHistory;
