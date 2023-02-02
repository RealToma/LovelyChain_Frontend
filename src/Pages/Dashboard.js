import styled, { keyframes } from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { dataStatsDashboard, dataStatsDashboardBlocks } from "../Data/Stats";
import { dataDashboardTransHistory } from "../Data/Table";
import StatsComponent from "../Components/Stats/StatsComponent";
import imgRocket from "../Assets/Images/Icon/rocket.png";
import imgPremiumLove from "../Assets/Images/Background/premiumLove.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import BoxBlock from "../Components/Box/BoxBlock";
import TableDashboardTransHistory from "../Components/Table/TableDashboardTransHistory";

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
      <SectionTrans>
        <SectionTransHistory>
          <SectoinTextHeadTransHistory>
            <TextSubject color={theme.palette.link.main}>
              Transactions History
            </TextSubject>
            <SectionViewAll>
              <TextViewAll color={theme.palette.link.main}>
                View All
              </TextViewAll>
              <IconRight color={theme.palette.link.main}>
                <MdOutlineKeyboardArrowRight />
              </IconRight>
            </SectionViewAll>
          </SectoinTextHeadTransHistory>
          <SectionTableTransHistory>
            <TableDashboardTransHistory
              data={dataDashboardTransHistory}
              height={"490px"}
            />
          </SectionTableTransHistory>
        </SectionTransHistory>
        <SectionPremium
          border={theme.palette.dashboard.premium.border}
          boxShadow={theme.palette.dashboard.premium.boxShadow}
        >
          <ImgPremiumLove>
            <img
              src={imgPremiumLove}
              width={"100%"}
              style={{ borderRadius: "0px 0px 24px 24px" }}
              alt=""
            />
          </ImgPremiumLove>
          <SectionTextPremium>
            <TextPremiumUp>
              Try the premium version from our partners
            </TextPremiumUp>
            <TextPremiumDown>You will get more feature here.</TextPremiumDown>
          </SectionTextPremium>
          <ButtonPremium bgcolor={theme.palette.dashboard.premium.backButton}>
            Go Premium
          </ButtonPremium>
        </SectionPremium>
      </SectionTrans>
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
    `} 2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
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
    animation: progress-1 2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
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

const SectionTrans = styled(Box)`
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 64px;
`;

const SectionTransHistory = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  margin-right: 32px;
`;

const SectoinTextHeadTransHistory = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const SectionPremium = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 490px;
  background: rgba(234, 70, 148, 0.96);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

const ImgPremiumLove = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
`;

const SectionTextPremium = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ButtonPremium = styled(Box)`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(12px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 16px;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  text-align: center;
  letter-spacing: 0.01em;
  color: #ffffff;
  user-select: none;
  cursor: pointer;
`;

const TextPremiumUp = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 120%;
  /* or 29px */

  letter-spacing: 0.01em;

  color: #ffffff;
`;

const TextPremiumDown = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  letter-spacing: 0.01em;

  color: #ffffff;

  opacity: 0.64;
  margin-top: 16px;
`;

const SectionTableTransHistory = styled(Box)`
  display: flex;
  width: 100%;
`;

export default Dashboard;
