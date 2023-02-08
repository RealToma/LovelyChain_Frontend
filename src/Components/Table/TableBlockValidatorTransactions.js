import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TableBlockValidatorTransactions = ({ data, height }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <StyledComponent
      style={{
        backgroundImage: theme.palette.table.back01,
      }}
      border={theme.palette.dashboard.tableTransHistory.border}
      boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
      height={height}
    >
      {data.map((each, index) => {
        return (
          <TableRow
            key={index}
            sx={{ "&:hover": { background: theme.palette.tertiary.back + 60 } }}
            onClick={() => {
              navigate("/transaction_details");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <RowLeft>
              <IconBox
                bgcolor={theme.palette.tertiary.back + 24}
                border={`1px solid ${theme.palette.link.main + "08"}`}
                color={theme.palette.link.main}
              >
                <MdOutlineAccountBalanceWallet />
              </IconBox>
              <TextTxn color={theme.palette.link.main}>{each.txn}</TextTxn>
            </RowLeft>
            <RowRight color={theme.palette.link.main}>
              {each.from.slice(0, 6) + "..." + each.from.slice(-2)}
              {"\u00a0"}
              {"\u00a0"}
              <span style={{ color: `${theme.palette.link.main}48` }}>to</span>
              {"\u00a0"}
              {"\u00a0"}
              {each.to.slice(0, 6) + "..." + each.to.slice(-2)}
            </RowRight>
          </TableRow>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 16px;
  overflow: auto;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 24px;
  margin-top: 24px;
`;

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 16px;
  /* &:hover {
    background: rgba(23, 25, 41, 0.48);
  } */
  transition: all 0.5s;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    margin-top: 20px;
    padding: 0px 20px;
  }
  transition: all 0.5s;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    margin-top: 20px;
    padding: 0px 10px;
  }
`;

const RowLeft = styled(Box)`
  display: flex;
  align-items: center;
`;

const RowRight = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;

  @media (max-width: 1440px) {
    margin-top: 14px;
  }
  @media (max-width: 768px) {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    /* or 15px */

    letter-spacing: 0.02em;
    word-break: break-all;
  }
`;

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  font-size: 1.5rem;
`;

const TextTxn = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
  margin-left: 24px;

  transition: all 0.5s;
  @media (max-width: 768px) {
    font-family: "Neue Plak";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    /* or 15px */

    letter-spacing: 0.02em;
    word-break: break-all;
  }
`;

export default TableBlockValidatorTransactions;
