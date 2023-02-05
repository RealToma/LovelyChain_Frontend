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
            <SectionDesktop>
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
            </SectionDesktop>

            <SectionUp>
              <TextBlock>Block {each.blockId}</TextBlock>
              <TextTime color={theme.palette.link.main}>
                {each.time} day ago
              </TextTime>
            </SectionUp>

            <SectionUp mt={"20px"}>
              <TextValue01>
                +{each.value01.toLocaleString("en-US")} LOVELY
              </TextValue01>
              <TextValue02 color={theme.palette.link.main}>
                {each.value02.toLocaleString("en-US")} LOVELY
              </TextValue02>
            </SectionUp>
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

  transition: all 0.5s;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    padding: 24px 22px;
  }
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

  transition: all 0.5s;
  @media (max-width: 768px) {
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
  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
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
  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

const SectionDesktop = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  transition: all 0.5s;
  @media (max-width: 1000px) {
    display: none;
  }
`;

const SectionUp = styled(Box)`
  display: none;
  width: 100%;
  transition: all 0.5s;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default TableInternalTransactions;
