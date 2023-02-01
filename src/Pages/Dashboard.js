import styled, { keyframes } from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { dataStatsDashboard, dataStatsDashboardBlocks } from "../Data/Stats";
import StatsComponent from "../Components/Stats/StatsComponent";
import imgRocket from "../Assets/Images/Icon/rocket.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BoxBlock from "../Components/Box/BoxBlock";

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
          <SectionTextCircleRocket>
            <TextCircleUp color={theme.palette.link.main + 48}>
              Next cycle
            </TextCircleUp>
            <TextCircleDown color={theme.palette.link.main}>67%</TextCircleDown>
          </SectionTextCircleRocket>
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
      <SectionBlock>
        <SectionBlockText>
          <TextSubject color={theme.palette.link.main}>Blocks</TextSubject>
          <SectionViewAll>
            <TextViewAll color={theme.palette.link.main}>View All</TextViewAll>
            <IconRight color={theme.palette.link.main}>
              <MdOutlineKeyboardArrowRight />
            </IconRight>
          </SectionViewAll>
        </SectionBlockText>
        <SectionBlockGroup>
          {dataStatsDashboardBlocks.map((each, index) => {
            return <BoxBlock data={each} key={index} index={index} />;
          })}
        </SectionBlockGroup>
      </SectionBlock>
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
    stroke-dasharray: 510;
    stroke-dashoffset: 510;
    animation: progress-1 1s ease-out forwards;
  }
  @keyframes progress-1 {
    from {
      stroke-dasharray: 510;
    }
    to {
      stroke-dasharray: 850;
    }
  }
`;

const SectionTextCircleRocket = styled(Box)`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TextCircleUp = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;
  /* or 13px */

  text-align: center;
  letter-spacing: 0.01em;
`;

const TextCircleDown = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
  /* identical to box height, or 32px */

  text-align: center;
  letter-spacing: 0.01em;
  margin-top: 5px;
`;

const SectionBlock = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 65px;
`;

const SectionBlockText = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const TextSubject = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;

  letter-spacing: 0.01em;
`;

const SectionViewAll = styled(Box)`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    > div:nth-child(1) {
      color: #ea4694;
    }
    > div:nth-child(2) {
      color: #ea4694;
    }
  }
`;

const TextViewAll = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: 0.01em;
  transition: 0.3s;
`;

const IconRight = styled(Box)`
  display: flex;
  font-size: 1.5rem;
  margin-left: 5px;
  transition: 0.3s;
`;

const SectionBlockGroup = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;

export default Dashboard;
