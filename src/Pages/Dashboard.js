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
        {dataStatsDashboard.map((each, index) => {
          return <StatsComponent key={index} data={each} index={index} />;
        })}
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



export default Dashboard;
