import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { BsQuestion } from "react-icons/bs";
import { TbBoxMultiple } from "react-icons/tb";
import TableBlockDetailTransactions from "../../Components/Table/TableBlockDetailTransactions";
import { dataBlockDetailsTrans } from "../../Data/Table";

const BlockDetails = () => {
  const theme = useTheme();
  const { state } = useLocation();
  const [indexBlock, setIndexBlock] = useState(state.index);
  console.log(state);

  const handleLeftBlock = () => {
    let temp = indexBlock;
    temp--;
    if (temp < 0) {
      return;
    }
    setIndexBlock(temp);
  };

  const hanldeRightBlock = () => {
    let temp = indexBlock;
    temp++;
    if (temp > state.data.length - 1) {
      return;
    }
    setIndexBlock(temp);
  };

  return (
    <StyledComponent>
      <SectionDetails>
        <TextSubject color={theme.palette.link.main}>Block Details</TextSubject>
        <SectionEachDetails
          style={{
            backgroundImage: theme.palette.table.back02,
          }}
          border={theme.palette.dashboard.tableTransHistory.border}
          boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
        >
          <SectionHead
            borderBottom={theme.palette.dashboard.tableTransHistory.border}
          >
            <IconArrowButton
              color={theme.palette.link.main}
              border={theme.palette.dashboard.tableTransHistory.border}
              onClick={() => handleLeftBlock()}
            >
              <MdOutlineKeyboardArrowLeft />
            </IconArrowButton>
            <TextBlockId color={theme.palette.link.main}>
              Block {state.data[indexBlock].id}
            </TextBlockId>
            <IconArrowButton
              color={theme.palette.link.main}
              border={theme.palette.dashboard.tableTransHistory.border}
            >
              <MdOutlineKeyboardArrowRight onClick={() => hanldeRightBlock()} />
            </IconArrowButton>
          </SectionHead>
          <SectionDetailBody>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Block Height</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                {state.data[indexBlock].height}
              </TextEachContent>
            </EachDetail>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Timestamp</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                {state.data[indexBlock].timestamp}
              </TextEachContent>
            </EachDetail>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Transactions</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <ButtonTransactions>2 Transactions</ButtonTransactions>
            </EachDetail>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Validator</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                <Box display={"flex"}>
                  {state.data[indexBlock].validator.slice(0, 10) +
                    "..." +
                    state.data[indexBlock].validator.slice(-2)}
                </Box>
                <IconExplore color={theme.palette.link.main}>
                  <TbBoxMultiple />
                </IconExplore>
                <IconExplore color={theme.palette.link.main}></IconExplore>
              </TextEachContent>
            </EachDetail>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Size</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                {state.data[indexBlock].sizeByte} bytes
              </TextEachContent>
            </EachDetail>
            <EachDetail01>
              <EachDetail mr={"30px"}>
                <TextEachHead color={theme.palette.link.main + 48}>
                  <Box display={"flex"}>Hash</Box>
                  <IconQuestion
                    border={`1px solid ${theme.palette.link.main + 16}`}
                    color={theme.palette.link.main}
                  >
                    <BsQuestion />
                  </IconQuestion>
                </TextEachHead>
                <TextEachContent color={theme.palette.link.main}>
                  <Box display={"flex"}>
                    {state.data[indexBlock].hash.slice(0, 6) +
                      "..." +
                      state.data[indexBlock].hash.slice(-2)}
                  </Box>
                  <IconExplore color={theme.palette.link.main}>
                    <TbBoxMultiple />
                  </IconExplore>
                  <IconExplore color={theme.palette.link.main}></IconExplore>
                </TextEachContent>
              </EachDetail>
              <EachDetail>
                <TextEachHead color={theme.palette.link.main + 48}>
                  <Box display={"flex"}>Parent Hash</Box>
                  <IconQuestion
                    border={`1px solid ${theme.palette.link.main + 16}`}
                    color={theme.palette.link.main}
                  >
                    <BsQuestion />
                  </IconQuestion>
                </TextEachHead>
                <TextEachContent color={theme.palette.link.main}>
                  <Box display={"flex"}>
                    {state.data[indexBlock].hashParent.slice(0, 6) +
                      "..." +
                      state.data[indexBlock].hashParent.slice(-2)}
                  </Box>
                  <IconExplore color={theme.palette.link.main}>
                    <TbBoxMultiple />
                  </IconExplore>
                  <IconExplore color={theme.palette.link.main}></IconExplore>
                </TextEachContent>
              </EachDetail>
            </EachDetail01>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Difficulty</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                {state.data[indexBlock].difficulty}
              </TextEachContent>
            </EachDetail>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Total Difficulty</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                {state.data[indexBlock].difficultyTotal}
              </TextEachContent>
            </EachDetail>
            <EachDetail01>
              <EachDetail mr={"30px"}>
                <TextEachHead color={theme.palette.link.main + 48}>
                  <Box display={"flex"}>Gas Used</Box>
                  <IconQuestion
                    border={`1px solid ${theme.palette.link.main + 16}`}
                    color={theme.palette.link.main}
                  >
                    <BsQuestion />
                  </IconQuestion>
                </TextEachHead>
                <TextEachContent color={theme.palette.link.main}>
                  {state.data[indexBlock].progress.gasUsed.toLocaleString(
                    "en-US"
                  )}{" "}
                  |{" "}
                  {(
                    state.data[indexBlock].progress.gasLimit /
                    state.data[indexBlock].progress.gasUsed
                  ).toFixed(2)}
                  %
                </TextEachContent>
              </EachDetail>
              <EachDetail>
                <TextEachHead color={theme.palette.link.main + 48}>
                  <Box display={"flex"}>Gas Limit</Box>
                  <IconQuestion
                    border={`1px solid ${theme.palette.link.main + 16}`}
                    color={theme.palette.link.main}
                  >
                    <BsQuestion />
                  </IconQuestion>
                </TextEachHead>
                <TextEachContent color={theme.palette.link.main}>
                  {state.data[indexBlock].progress.gasLimit.toLocaleString(
                    "en-US"
                  )}

                  <IconExplore color={theme.palette.link.main}></IconExplore>
                </TextEachContent>
              </EachDetail>
            </EachDetail01>
            <EachDetail>
              <TextEachHead color={theme.palette.link.main + 48}>
                <Box display={"flex"}>Nonce</Box>
                <IconQuestion
                  border={`1px solid ${theme.palette.link.main + 16}`}
                  color={theme.palette.link.main}
                >
                  <BsQuestion />
                </IconQuestion>
              </TextEachHead>
              <TextEachContent color={theme.palette.link.main}>
                {state.data[indexBlock].nonce}
              </TextEachContent>
            </EachDetail>
          </SectionDetailBody>
          <SectionReward
            borderTop={theme.palette.dashboard.tableTransHistory.border}
          >
            <TextEachHead color={theme.palette.link.main + 48}>
              <Box display={"flex"}>Validator Reward</Box>
              <IconQuestion
                border={`1px solid ${theme.palette.link.main + 16}`}
                color={theme.palette.link.main}
              >
                <BsQuestion />
              </IconQuestion>
            </TextEachHead>
            <TextValidatorReward>
              {state.data[indexBlock].reward} Lovely
            </TextValidatorReward>
          </SectionReward>
        </SectionEachDetails>
      </SectionDetails>
      <SectionTransactions>
        <TextSubject color={theme.palette.link.main}>Transactions</TextSubject>
        <TableBlockDetailTransactions
          data={dataBlockDetailsTrans}
          height={"100%"}
        />
      </SectionTransactions>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;

  transition: all 0.5s;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SectionDetails = styled(Box)`
  display: flex;
  width: 400px;
  flex-direction: column;
  margin-right: 32px;

  transition: all 0.5s;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SectionTransactions = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;

  transition: all 0.5s;
  @media (max-width: 900px) {
    margin-top: 34px;
  }
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

const SectionEachDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 410px;
  margin-top: 24px;
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;

  transition: all 0.5s;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  height: 72px;
  align-items: center;
  padding: 0px 32px;
  box-sizing: border-box;

  transition: all 0.5s;
  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const IconArrowButton = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 6px;
  font-size: 1.3rem;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: #ea4694;
  }
`;

const TextBlockId = styled(Box)`
  display: flex;
  justify-content: center;
  width: 220px;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  /* identical to box height, or 24px */

  letter-spacing: 0.01em;
  margin: 0px 16px;

  transition: all 0.5s;
  @media (max-width: 900px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

const SectionDetailBody = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 32px;
  box-sizing: border-box;

  transition: all 0.5s;
  @media (max-width: 900px) {
    padding: 20px 24px;
  }
  @media (max-width: 500px) {
    padding: 20px 18px;
  }
`;

const EachDetail = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 24px;
`;

const EachDetail01 = styled(Box)`
  display: flex;
  width: 100%;
  width: 100%;
  align-items: center;
`;

const TextEachHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;

const TextEachContent = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  text-align: start;
  letter-spacing: 0.02em;
  word-break: break-all;
`;

const IconQuestion = styled(Box)`
  display: flex;

  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: 1.3rem;
  margin-left: 6px;

  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ea4694;
  }
`;

const IconExplore = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 1.3rem;
  margin-left: 6px;

  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ea4694;
  }
`;

const ButtonTransactions = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 38px;
  border: 1px solid #ea4694;
  border-radius: 12px;

  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: 0.02em;

  color: #ea4694;

  transition: 0.3s;
  user-select: none;
  cursor: pointer;
  &:hover {
  }
`;

const SectionReward = styled(Box)`
  display: flex;
  width: 100%;
  height: 95px;
  flex-direction: column;
  padding: 0px 32px;
  box-sizing: border-box;
  justify-content: center;
`;

const TextValidatorReward = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  /* identical to box height, or 36px */

  letter-spacing: 0.02em;

  color: #ea4694;
`;

export default BlockDetails;
