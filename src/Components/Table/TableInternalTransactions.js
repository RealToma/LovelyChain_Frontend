import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const TableInternalTransactions = ({ data }) => {
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
            <TextBlock flex={data.head[0].flexWidth}>
              Block {each.blockId}
            </TextBlock>
            <TextTime
              flex={data.head[1].flexWidth}
              color={theme.palette.link.main}
            >
              {each.time} day ago
            </TextTime>
            <TextValue01 flex={data.head[2].flexWidth}>
              +{each.value01.toLocaleString("en-US")} LOVELY
            </TextValue01>
            <TextValue02
              flex={data.head[3].flexWidth}
              color={theme.palette.link.main}
            >
              {each.value02.toLocaleString("en-US")} LOVELY
            </TextValue02>
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
  align-items: center;
  width: 100%;
  height: 90px;
  backdrop-filter: blur(8px);
  border-radius: 20px;
  padding: 0px 40px;
  box-sizing: border-box;
  margin-top: 24px;
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
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;

  color: #15b341;
`;
const TextValue02 = styled(Box)`
  display: flex;
  justify-content: flex-end;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  text-align: right;
  letter-spacing: 0.02em;
`;
export default TableInternalTransactions;
