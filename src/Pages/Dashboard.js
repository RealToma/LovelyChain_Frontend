import styled, { keyframes } from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { dataStatsDashboard } from "../Data/Stats";
import StatsComponent from "../Components/Stats/StatsComponent";
import imgRocket from "../Assets/Images/Icon/rocket.png";

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
        <StatsProgress>
          <StatsProgressRocket>
            <img src={imgRocket} alt={"rocket"} />
          </StatsProgressRocket>
          <svg style={{ overflow: "inherit" }}>
            <circle
              className="bg"
              style={{
                stroke: theme.palette.circleProgress.back,
                filter: `drop-shadow(${theme.palette.circleProgress.bShadowBack})`,
              }}
              cx="87"
              cy="87"
              r="80"
            />
            <circle
              className="meter-1"
              cx="87"
              cy="87"
              r="80"
              style={{
                stroke: theme.palette.circleProgress.color,
                color: theme.palette.circleProgress.color,
                filter: `drop-shadow(${theme.palette.circleProgress.bShadowLine})`,
              }}
            />
          </svg>
        </StatsProgress>
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

const StatsProgressRocket = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(240deg);
      }
    `} 1s ease-out forwards;
  & > img {
    position: absolute;
    transform: translate(-50%, -50%) rotate(90deg) translateX(-75px);
  }
`;

const StatsProgress = styled(Box)`
  position: relative;
  display: flex;
  svg {
    width: 174px;
    height: 174px;
  }
  .bg {
    fill: none;
    stroke-width: 14px;
  }

  .meter-1 {
    fill: none;
    stroke-width: 14px;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    stroke-dasharray: 360;
    stroke-dashoffset: 30;
    animation: progress-1 1s ease-out;
  }
  @keyframes progress-1 {
    from {
      stroke-dashoffset: 360;
    }
    to {
      stroke-dashoffset: 30;
    }
  }
`;

export default Dashboard;
