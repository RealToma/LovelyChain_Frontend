import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import { useState } from "react";

const TableAddresses = ({ data }) => {
  const theme = useTheme();
  const [flagSortClick, setFlagSortClick] = useState(false);

  return (
    <StyledComponent
      style={{
        backgroundImage: theme.palette.table.back01,
      }}
      border={theme.palette.dashboard.tableTransHistory.border}
      boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
    >
      <TableHead
        borderBottom={theme.palette.dashboard.tableTransHistory.border}
      >
        <RowHead>
          {data.head.map((each, index) => {
            return (
              <SectionHeadCell
                key={index}
                flex={each.flexWidth}
                justifyContent={
                  index === data.head.length - 1 ? "flex-end" : "flex-start"
                }
                color={theme.palette.link.main + 48}
              >
                <Box display="flex" alignSelf={"center"}>
                  {each.text}
                </Box>
                {!each.flagIconSort ? (
                  <></>
                ) : (
                  <IconSort
                    color={theme.palette.link.main}
                    onClick={() => {
                      setFlagSortClick(!flagSortClick);
                    }}
                  >
                    {!flagSortClick ? (
                      <BsChevronDoubleDown />
                    ) : (
                      <BsChevronDoubleUp />
                    )}
                  </IconSort>
                )}
              </SectionHeadCell>
            );
          })}
        </RowHead>
      </TableHead>
      <TableBody>
        {data.body.map((each, index) => {
          return (
            <TableRow
              key={index}
              sx={{
                "&:hover": { background: theme.palette.tertiary.back + 80 },
              }}
            >
              <SectionNumber flex={data.head[0].flexWidth}>
                <IconBox
                  bgcolor={theme.palette.tertiary.back + 24}
                  border={`1px solid ${theme.palette.link.main + "08"}`}
                  color={theme.palette.link.main}
                >
                  {index + 1}
                </IconBox>
              </SectionNumber>

              <TextTxn
                color={theme.palette.link.main}
                flex={data.head[1].flexWidth}
              >
                {each.address.slice(0, 10) + "..." + each.address.slice(0, 4)}
              </TextTxn>
              <SectionBalance flex={data.head[2].flexWidth}>
                <TextBigBalance color={theme.palette.link.main}>
                  7.5
                </TextBigBalance>
                {"\u00a0"}
                {"\u00a0"}
                <TextSmallBalance color={theme.palette.link.main}>
                  E
                </TextSmallBalance>
                <TextPlus color={theme.palette.link.main + 48}>+</TextPlus>
                <TextBigBalance color={theme.palette.link.main}>
                  {each.balance}
                </TextBigBalance>
                {"\u00a0"}
                {"\u00a0"}
                <TextSmallBalance color={theme.palette.link.main}>
                  Lovely
                </TextSmallBalance>
              </SectionBalance>
              <TextTransSent
                flex={data.head[3].flexWidth}
                color={theme.palette.link.main}
                justifyContent="flex-end"
              >
                {each.txnCount}
                {"\u00a0"}Transactions sent
              </TextTransSent>
            </TableRow>
          );
        })}
      </TableBody>
    </StyledComponent>
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
`;

const TableHead = styled(Box)`
  display: flex;
  width: 100%;
`;

const RowHead = styled(Box)`
  display: flex;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  box-sizing: border-box;
  align-items: center;
`;

const SectionHeadCell = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.02em;
`;

const IconSort = styled(Box)`
  font-size: 0.8rem;
  margin-left: 10px;
  user-select: none;
  transition: 0.3s;
  &:hover {
    color: #ea4694;
  }
  cursor: pointer;
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
`;

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  text-align: center;
  letter-spacing: 0.02em;
`;

const TextTxn = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
`;

const TextTransSent = styled(Box)`
  display: flex;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
`;

const SectionBalance = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionNumber = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextBigBalance = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  /* or 26px */

  text-align: right;
  letter-spacing: 0.02em;
`;

const TextSmallBalance = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
`;

const TextPlus = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
  margin: 0px 24px;
`;

export default TableAddresses;