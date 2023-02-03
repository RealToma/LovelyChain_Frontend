import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TableCoinBalanceHisotryTransactions = ({ data }) => {
  const theme = useTheme();

  return (
    <StyledComponent>
      {data.body.map((each, index) => {
        return (
          <RowEach
            key={index}
            border={`1px solid ${theme.palette.link.main + 16}`}
            bgcolor={theme.palette.table.back03}
            boxShadow={theme.palette.table.boxShadow01}
          >
            <RowUp borderBottom={`1px solid ${theme.palette.link.main + "08"}`}>
              <TextBlock>Block {each.blockId}</TextBlock>
              <TextTime color={theme.palette.link.main}>
                {each.time} day ago
              </TextTime>
            </RowUp>
            <RowDown>
              <TextValue02 color={theme.palette.link.main}>
                {each.value02.toLocaleString("en-US")} LOVELY
              </TextValue02>
              <TextValue01>
                +{each.value01.toLocaleString("en-US")} LOVELY
              </TextValue01>
            </RowDown>
          </RowEach>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const RowEach = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  backdrop-filter: blur(8px);
  border-radius: 20px;
  margin-top: 16px;
  cursor: pointer;
`;

const TextBlock = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  letter-spacing: 0.01em;

  color: #ea4694;
`;

const TextTime = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.02em;
`;

const TextValue01 = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  letter-spacing: 0.02em;
  color: #15b341;
  margin-top: 8px;
`;
const TextValue02 = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  letter-spacing: 0.02em;
`;

const RowUp = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 32px;
  box-sizing: border-box;
`;

const RowDown = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  box-sizing: border-box;
`;

export default TableCoinBalanceHisotryTransactions;
