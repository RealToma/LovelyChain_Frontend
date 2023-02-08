import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BsQuestion } from "react-icons/bs";
import { TbBoxMultiple } from "react-icons/tb";
import { MdCheckCircleOutline } from "react-icons/md";

const TransactionDetails = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <TextSubject color={theme.palette.link.main}>
        Transaction Details
      </TextSubject>
      <SectionDetailBody
        border={theme.palette.dashboard.tableTransHistory.border}
        boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
        style={{
          backgroundImage: theme.palette.table.back01,
        }}
      >
        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Transaction Hash</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            0x9986b6af055266f165efea8f07ff9e42703ee03d53b2bf0c78816a203ee54f2a
            <IconExplore color={theme.palette.link.main}>
              <TbBoxMultiple />
            </IconExplore>
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Result</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={"#15B341"}>
            <Box display={"flex"} mr={"5px"} fontSize={"1.3rem"}>
              <MdCheckCircleOutline />
            </Box>
            <Box display={"flex"}>Success</Box>
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Status</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={"#15B341"}>
            Confirmed by 364,575
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Block</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>334</TextEachContent>
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
            $
            {
              "21 days ago | January-18-2023 07:49:18 AM +-5 UTC | Confirmed within <= 5.0 seconds"
            }
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>From</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            0x5735413bddea7cc7e38281b216b348a9e31970eb
            <IconExplore color={theme.palette.link.main}>
              <TbBoxMultiple />
            </IconExplore>
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>To</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            0x8c9c2fba6130cf2b388df7707c9168c963a6d9bb
            <IconExplore color={theme.palette.link.main}>
              <TbBoxMultiple />
            </IconExplore>
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Value</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            0 LOVELY ($0.000000 USD)
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}> Transaction Fee</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            0 LOVELY ($0.000000 USD)
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Gas Price</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            0 Gwei
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
            125,677
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
            125,677
          </TextEachContent>
        </EachDetail>

        <EachDetail>
          <TextEachHead color={theme.palette.link.main + 48}>
            <Box display={"flex"}>Gas Used by Transaction</Box>
            <IconQuestion
              border={`1px solid ${theme.palette.link.main + 16}`}
              color={theme.palette.link.main}
            >
              <BsQuestion />
            </IconQuestion>
          </TextEachHead>
          <TextEachContent color={theme.palette.link.main}>
            125,677 | 100%
          </TextEachContent>
        </EachDetail>

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
          <TextEachContent color={theme.palette.link.main}>0</TextEachContent>
        </EachDetail>
      </SectionDetailBody>
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

const SectionDetailBody = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  margin-top: 24px;
  transition: all 0.5s;
  border-radius: 24px;

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
  align-items: center;

  margin-bottom: 24px;

  transition: all 0.5s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextEachHead = styled(Box)`
  display: flex;
  width: 300px;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  letter-spacing: 0.02em;

  transition: all 0.5s;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 8px;
  }
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

const TextEachContent = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
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

export default TransactionDetails;
