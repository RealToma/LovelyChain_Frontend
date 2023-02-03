import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const BoxBlock = ({ data, index }) => {
  const theme = useTheme();

  return (
    <StyledComponent
      border={`1px solid ${theme.palette.link.main + 16}`}
      style={{ backgroundImage: theme.palette.dashBlocks[index].back }}
      boxShadow={theme.palette.dashBlocks[index].shadow}
    >
      {data.flagMined ? (
        <SectionMined>
          <TextId>{data.id}</TextId>
          <TextMined color={theme.palette.link.main}>
            Block Mined, awaiting import...
          </TextMined>
        </SectionMined>
      ) : (
        <SectionNotMined>
          <SectionUp
            borderBottom={`1px solid ${theme.palette.link.main + "08"}`}
          >
            <TextIdNotMined>{data.id}</TextIdNotMined>
          </SectionUp>
          <SectionDown>
            <SectionTransaction>
              <TextTransaction color={theme.palette.link.main}>
                0 Transactions
              </TextTransaction>
              <TextTransaction color={theme.palette.link.main} mt={"10px"}>
                {data.timeTrans} minutes ago
              </TextTransaction>
            </SectionTransaction>
            <SectionValidator>
              <TextValidator color={theme.palette.link.main}>
                Validator
              </TextValidator>
              <TextValidatorAddress color={theme.palette.link.main}>
                {data.validator.slice(0, 6) + "..." + data.validator.slice(-2)}
              </TextValidatorAddress>
            </SectionValidator>
          </SectionDown>
        </SectionNotMined>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 300px;
  height: 150px;
  backdrop-filter: blur(8px);
  border-radius: 24px;


  transition: all 0.5s;
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SectionMined = styled(Box)`
  display: flex;

  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0px 32px;
  box-sizing: border-box;
  justify-content: center;
`;

const SectionNotMined = styled(Box)`
  display: flex;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const TextId = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: 0.01em;

  color: #ea4694;
`;
const TextIdNotMined = styled(Box)`
  padding: 0px 32px;
  box-sizing: border-box;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;
  /* or 35px */

  letter-spacing: 0.01em;

  color: #ea4694;
`;

const TextMined = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  letter-spacing: 0.01em;
  margin-top: 10px;
`;

const SectionUp = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const SectionDown = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0px 32px;
  box-sizing: border-box;
`;

const SectionTransaction = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
const SectionValidator = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const TextTransaction = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 110%;
  /* or 13px */

  letter-spacing: 0.01em;
`;

const TextValidator = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  /* or 15px */

  letter-spacing: 0.01em;
  opacity: 0.48;
`;

const TextValidatorAddress = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.01em;
`;

export default BoxBlock;
