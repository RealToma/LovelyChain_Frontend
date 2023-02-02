import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
        </SectionEachDetails>
      </SectionDetails>
      <SectionTransactions></SectionTransactions>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const SectionDetails = styled(Box)`
  display: flex;
  width: 400px;
  flex-direction: column;
`;

const SectionTransactions = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
`;

const TextSubject = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;

  letter-spacing: 0.01em;
`;

const SectionEachDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 410px;
  margin-top: 24px;
  backdrop-filter: blur(8px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 24px;
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  height: 72px;
  align-items: center;
  padding: 0px 32px;
  box-sizing: border-box;
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
`;

export default BlockDetails;
