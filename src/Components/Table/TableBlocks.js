import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const TableBlocks = ({ data }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <StyledComponent
        style={{
          backgroundImage: theme.palette.table.back01,
        }}
        border={theme.palette.dashboard.tableTransHistory.border}
        boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
      >
        <TableBody>
          {data.body.map((each, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  "&:hover": { background: theme.palette.tertiary.back + 80 },
                }}
                onClick={() => {
                  navigate("/block_details", {
                    state: {
                      index: index,
                      data: data.body,
                    },
                  });
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                <TextId flex={data.head[0].flexWidth}>{each.id}</TextId>
                <TextTime
                  color={theme.palette.link.main}
                  flex={data.head[1].flexWidth}
                >
                  {each.time}
                  {"\u00a0"}min ago
                </TextTime>
                <TextTime
                  color={theme.palette.link.main}
                  flex={data.head[2].flexWidth}
                >
                  {each.transCount}
                  {"\u00a0"}transactions
                </TextTime>
                <TextTime
                  color={theme.palette.link.main}
                  flex={data.head[3].flexWidth}
                >
                  {each.sizeByte}
                  {"\u00a0"}bytes
                </TextTime>
                <SectionValidator flex={data.head[4].flexWidth}>
                  <TextValidator01 color={theme.palette.link.main + 48}>
                    Validator
                  </TextValidator01>
                  <TextValidator02 color={theme.palette.link.main}>
                    {each.validator.slice(0, 6) +
                      "..." +
                      each.validator.slice(-2)}
                  </TextValidator02>
                </SectionValidator>
                <SectionProgress flex={data.head[5].flexWidth}>
                  <SectionTextProgreess>
                    <TextPercent>{each.progress.percent}%</TextPercent>
                    <TextGasLimit color={theme.palette.link.main}>
                      {each.progress.gasLimit.toLocaleString("en-US")}
                      {"\u00a0"}Gas Limit
                    </TextGasLimit>
                  </SectionTextProgreess>
                  <SectionProgressBar>
                    <BorderLinearProgress
                      value={each.progress.percent}
                      variant="determinate"
                    />
                  </SectionProgressBar>
                </SectionProgress>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledComponent>
      <StyledComponentMobile>
        <TableBody>
          {data.body.map((each, index) => {
            return (
              <TableRow
                key={index}
                sx={{
                  "&:hover": { background: theme.palette.tertiary.back + 80 },
                }}
                onClick={() => {
                  navigate("/block_details", {
                    state: {
                      index: index,
                      data: data.body,
                    },
                  });
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                style={{
                  backgroundImage: theme.palette.table.back01,
                }}
                border={theme.palette.dashboard.tableTransHistory.border}
                boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
              >
                <Box
                  display={"flex"}
                  width={"100%"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <TextId flex={data.head[0].flexWidth}>{each.id}</TextId>
                  <SectionValidator flex={data.head[4].flexWidth}>
                    <TextValidator01 color={theme.palette.link.main + 48}>
                      Validator
                    </TextValidator01>
                    <TextValidator02 color={theme.palette.link.main}>
                      {each.validator.slice(0, 6) +
                        "..." +
                        each.validator.slice(-2)}
                    </TextValidator02>
                  </SectionValidator>
                </Box>

                <BoxTime>
                  <TextTime
                    color={theme.palette.link.main}
                    flex={data.head[1].flexWidth}
                  >
                    {each.time}
                    {"\u00a0"}min ago
                  </TextTime>
                  <TextTime
                    color={theme.palette.link.main}
                    flex={data.head[2].flexWidth}
                    justifyContent={"center"}
                  >
                    {each.transCount}
                    {"\u00a0"}transactions
                  </TextTime>
                  <TextTime
                    color={theme.palette.link.main}
                    flex={data.head[3].flexWidth}
                    justifyContent={"flex-end"}
                  >
                    {each.sizeByte}
                    {"\u00a0"}bytes
                  </TextTime>
                </BoxTime>

                <SectionProgress
                  flex={data.head[5].flexWidth}
                  marginTop={"20px"}
                >
                  <SectionTextProgreess>
                    <TextPercent>{each.progress.percent}%</TextPercent>
                    <TextGasLimit color={theme.palette.link.main}>
                      {each.progress.gasLimit.toLocaleString("en-US")}
                      {"\u00a0"}Gas Limit
                    </TextGasLimit>
                  </SectionTextProgreess>
                  <SectionProgressBar marginTop={"12px"}>
                    <BorderLinearProgress
                      value={each.progress.percent}
                      variant="determinate"
                    />
                  </SectionProgressBar>
                </SectionProgress>
              </TableRow>
            );
          })}
        </TableBody>
      </StyledComponentMobile>
    </>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 24px;
  margin-top: 24px;

  transition: all 0.5s;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const TableBody = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 16px;
  /* &:hover {
    background: rgba(23, 25, 41, 0.48);
  } */

  transition: all 0.5s;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    padding: 22px 24px;
    box-sizing: border-box;
    align-items: flex-start;
    margin-top: 8px;
  }
`;

const TextId = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  letter-spacing: 0.01em;

  color: #ea4694;
  transition: all 0.5s;
  @media (max-width: 500px) {
    font-size: 20px;
  }

`;

const TextTime = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  text-align: right;
  letter-spacing: 0.02em;

  transition: all 0.5s;
  @media (max-width: 500px) {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    /* or 15px */

    letter-spacing: 0.02em;
  }

  @media (max-width: 389px) {
    margin-top: 8px;
  }
`;

const SectionValidator = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  @media (max-width: 1000px) {
    align-items: flex-end;
  }
`;

const TextValidator01 = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.02em;

  transition: 0.5s;
  @media (max-width: 500px) {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 110%;
    /* or 13px */

    letter-spacing: 0.02em;
  }
`;

const TextValidator02 = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
  margin-top: 8px;

  transition: 0.5s;
  @media (max-width: 500px) {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    /* or 15px */

    letter-spacing: 0.02em;
  }
`;

const SectionProgress = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionTextProgreess = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const SectionProgressBar = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 12px;
`;

const TextPercent = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;

  color: #ea4694;
`;

const TextGasLimit = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  text-align: right;
  letter-spacing: 0.02em;
`;

const BorderLinearProgress = styled(LinearProgress)({
  height: 8,
  borderRadius: 5,
  position: "absolute",
  left: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    height: 8,
    width: "100%",
    backgroundColor: "rgba(234, 70, 148, 0.24)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#EA4694",
  },
});

const StyledComponentMobile = styled(Box)`
  display: none;
  width: 100%;
  overflow: auto;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 24px;
  margin-top: 24px;

  transition: all 0.5s;
  @media (max-width: 1000px) {
    display: flex;
  }
`;

const BoxTime = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;

  transition: all 0.5s;
  @media (max-width: 389px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default TableBlocks;
