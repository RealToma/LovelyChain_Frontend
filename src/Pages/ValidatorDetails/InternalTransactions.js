import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ChartBalance from "../../Components/Chart/ChartBalance";
import { dataTableInternalTransactions } from "../../Data/Table";
import TableInternalTransactions from "../../Components/Table/TableInternalTransactions";

const InternalTransactions = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <TextSubject color={theme.palette.link.main}>Balances</TextSubject>
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
      <SectionTransHistory>
        <TableInternalTransactions data={dataTableInternalTransactions} />
      </SectionTransHistory>
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

  transition: all 0.5s;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
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

  transition: all 0.5s;
  @media (max-width: 900px) {
    font-size: 24px;
  }
  @media (max-width: 350px) {
    font-size: 18px;
  }
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

  transition: all 0.5s;
  @media (max-width: 900px) {
    margin-top: 24px;
  }
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
  margin-left: 40px;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ea4694;
  }

  transition: all 0.5s;
  @media (max-width: 900px) {
    margin-left: 0px;
    margin-right: 24px;
  }

  @media (max-width: 500px) {
    margin-left: 0px;
    margin-right: 20px;
  }
`;

const IconWave = styled(Box)`
  margin: 0px 16px;
  font-size: 1.5rem;
  @media (max-width: 900px) {
    margin: 0px 8px;
  }
`;

const SectionChart = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
  height: 400px;
  transition: all 0.5s;
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 350px) {
    height: 200px;
  }
`;

const SectionTransHistory = styled(Box)`
  display: flex;
  margin-top: 24px;
`;

export default InternalTransactions;
