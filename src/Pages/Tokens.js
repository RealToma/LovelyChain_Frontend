import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TableTokens from "../Components/Table/TableTokens";
import { dataTableTokens } from "../Data/Table";
import { BiSearch } from "react-icons/bi";

const Tokens = () => {
  const theme = useTheme();

  return (
    <StyledComponent>
      <SectionHead>
        <TextSubject color={theme.palette.link.main}>Tokens</TextSubject>
        <SectionSearch>
          <IconSearch color={theme.palette.link.main}>
            <BiSearch />
          </IconSearch>
          <InputSearch
            component={"input"}
            type={"text"}
            placeholder={"Token name or symbol..."}
            color={theme.palette.link.main}
            style={{
              "::placeholder": `color:${theme.palette.link.main + 48}`,
            }}
          />
        </SectionSearch>
      </SectionHead>

      <TableTokens data={dataTableTokens} />
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

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  transition: all 0.5s;
  @media (max-width: 389px) {
    flex-direction: column;
    align-items: flex-start;
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

const SectionSearch = styled(Box)`
  display: flex;
  align-items: flex-start;

  transition: all 0.5s;
  @media (max-width: 389px) {
    margin-top: 24px;
  }
`;

const IconSearch = styled(Box)`
  display: flex;
  font-size: 1.3rem;
`;

const InputSearch = styled(Box)`
  display: flex;
  width: 250px;
  height: 16px;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  letter-spacing: 0.01em;

  transition: all 0.5s;
  @media (max-width: 500px) {
    width: 200px;
  }

  ::placeholder {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    letter-spacing: 0.01em;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    letter-spacing: 0.01em;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    /* identical to box height, or 16px */

    letter-spacing: 0.01em;
  }
`;

export default Tokens;
