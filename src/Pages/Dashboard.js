import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { dataStatsDashboard } from "../Data/Stats";
import StatsComponent from "../Components/Stats/StatsComponent";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <SectionStats>
        <StatsText>
          {dataStatsDashboard.map((each, index) => {
            return <StatsComponent key={index} data={each} index={index} />;
          })}
        </StatsText>
        <StatsProgress>12213</StatsProgress>
      </SectionStats>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 120px;
`;

const SectionStats = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatsText = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 32px;
`;

const StatsProgress = styled(Box)`
  display: flex;
`;

export default Dashboard;
