import styled from "styled-components";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import ChartBalance from "../../Components/Chart/ChartBalance";
import { useState } from "react";
import TableBlockValidatorTransactions from "../../Components/Table/TableBlockValidatorTransactions";
import { dataBlockDetailsTrans, dataTableBlocks } from "../../Data/Table";

import TableBlockValidatorBlockValidated from "../../Components/Table/TableBlockValidatorBlockValidated";
import InternalTransactions from "./InternalTransactions";
import CoinBalanceHistory from "./CoinBalanceHistory";

const ValidatorDetails = () => {
  const theme = useTheme();
  const [flagClickTab, setFlagClickTab] = useState([true, false, false, false]);

  return (
    <StyledComponent>
      <SectionHead>
        <SectionBalance>
          <SectionTitleBalance>
            <TextSubject color={theme.palette.link.main}>Balance</TextSubject>
            <SectionBalanceValue>
              <BoxPoint
                border={"1px solid #ea4694"}
                bgcolor={"#ea4694"}
              ></BoxPoint>
              <TeextBig color={"#ea4694"}>572</TeextBig>
              <TextSmall color={"#ea4694"}>Lovely</TextSmall>
              <BoxPoint
                border={`1px solid ${theme.palette.link.main + 48}`}
              ></BoxPoint>
              <TeextBig color={theme.palette.link.main}>24</TeextBig>
              <TextSmall color={theme.palette.link.main}>Tokens</TextSmall>
            </SectionBalanceValue>
          </SectionTitleBalance>
          <SectionChart>
            <ChartBalance
              data={[453, 253, 600, 400, 500, 300, 430, 550]}
              color={theme.palette.link.main}
              height={"100%"}
            />
          </SectionChart>
        </SectionBalance>
        <SectionAddressDetails>
          <TextSubject color={theme.palette.link.main}>
            Address Details
          </TextSubject>
          <SectionWalletDetails
            style={{
              backgroundImage: theme.palette.table.back01,
            }}
            border={theme.palette.dashboard.tableTransHistory.border}
            boxShadow={theme.palette.dashboard.tableTransHistory.boxShadow}
          >
            <SectionWallet>
              <IconBox
                bgcolor={theme.palette.tertiary.back + 24}
                border={`1px solid ${theme.palette.link.main + "08"}`}
                color={theme.palette.link.main}
              >
                <MdOutlineAccountBalanceWallet />
              </IconBox>
              <TextDetails>
                <TextWallet color={theme.palette.link.main + 48}>
                  Wallet
                </TextWallet>
                <TextLastBalanceUpdate color={theme.palette.link.main}>
                  {"0x68cFB667b456D6fE424b51383EFd2811231d2tEk1l1D3".slice(
                    0,
                    20
                  ) + "..."}
                </TextLastBalanceUpdate>
              </TextDetails>
            </SectionWallet>
            <SectionLastBalanceUpdate>
              <IconBox
                bgcolor={theme.palette.tertiary.back + 24}
                border={`1px solid ${theme.palette.link.main + "08"}`}
                color={theme.palette.link.main}
              >
                <MdOutlineAccountBalanceWallet />
              </IconBox>
              <TextDetails>
                <TextWallet color={theme.palette.link.main + 48}>
                  Last Balance Update
                </TextWallet>
                <TextLastBalanceUpdate color={theme.palette.link.main}>
                  #1,047,491 Block
                  {"\u00a0"}
                  {"\u00a0"}315,800 Blocks Validated
                </TextLastBalanceUpdate>
              </TextDetails>
            </SectionLastBalanceUpdate>
          </SectionWalletDetails>
        </SectionAddressDetails>
      </SectionHead>
      <SectionTab>
        <TabEach
          borderBottom={
            flagClickTab[0]
              ? "3px solid #EA4694"
              : `1px solid ${theme.palette.link.main + 12}`
          }
          color={theme.palette.link.main}
          onClick={() => {
            setFlagClickTab([true, false, false, false]);
          }}
        >
          Transactions
        </TabEach>
        <TabEach
          borderBottom={
            flagClickTab[1]
              ? "3px solid #EA4694"
              : `1px solid ${theme.palette.link.main + 12}`
          }
          color={theme.palette.link.main}
          onClick={() => {
            setFlagClickTab([false, true, false, false]);
          }}
        >
          Internal Transactions
        </TabEach>
        <TabEach
          borderBottom={
            flagClickTab[2]
              ? "3px solid #EA4694"
              : `1px solid ${theme.palette.link.main + 12}`
          }
          color={theme.palette.link.main}
          onClick={() => {
            setFlagClickTab([false, false, true, false]);
          }}
        >
          Coin Balance History
        </TabEach>
        <TabEach
          borderBottom={
            flagClickTab[3]
              ? "3px solid #EA4694"
              : `1px solid ${theme.palette.link.main + 12}`
          }
          color={theme.palette.link.main}
          onClick={() => {
            setFlagClickTab([false, false, false, true]);
          }}
        >
          Blocks Validated
        </TabEach>
      </SectionTab>
      {flagClickTab[0] ? (
        <TableBlockValidatorTransactions data={dataBlockDetailsTrans} />
      ) : (
        <></>
      )}
      {flagClickTab[1] ? <InternalTransactions /> : <></>}
      {flagClickTab[2] ? <CoinBalanceHistory /> : <></>}
      {flagClickTab[3] ? (
        <SectionTableBlockValdiated>
          <TextSubject color={theme.palette.link.main}>
            Blocks Validated
          </TextSubject>
          <TableBlockValidatorBlockValidated data={dataTableBlocks} />
        </SectionTableBlockValdiated>
      ) : (
        <></>
      )}
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
  align-items: center;
  justify-content: space-between;

  transition: all 0.5s;
  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
const SectionBalance = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  margin-right: 40px;
`;

const SectionAddressDetails = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;

  transition: all 0.5s;
  @media (max-width: 1000px) {
    margin-top: 50px;
    width: 100%;
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

const SectionTitleBalance = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionBalanceValue = styled(Box)`
  display: flex;
  align-items: center;
`;

const TeextBig = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  letter-spacing: 0.01em;

  margin-left: 8px;
  transition: all 0.5s;
  @media (max-width: 768px) {
    margin-left: 3px;
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

const TextSmall = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.01em;

  margin-left: 8px;
  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const BoxPoint = styled(Box)`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  margin-left: 24px;
  transition: all 0.5s;
  @media (max-width: 768px) {
    margin-left: 8px;
  }
`;

const SectionWalletDetails = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 20px 32px 32px;
  box-sizing: border-box;
  border-radius: 24px;
  margin-top: 24px;

  transition: all 0.5s;
  @media (max-width: 768px) {
    padding: 24px 20px 24px 24px;
  }
`;

const SectionWallet = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const SectionLastBalanceUpdate = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 32px;
`;

const IconBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  font-size: 1.5rem;

  transition: all 0.5s;
  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
  }
`;

const TextDetails = styled(Box)`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin-left: 24px;
  justify-content: space-between;
`;

const TextWallet = styled(Box)`
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.02em;
  margin-bottom: 8px;

  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TextLastBalanceUpdate = styled(Box)`
  word-break: break-all;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 110%;
  /* identical to box height, or 22px */

  letter-spacing: 0.02em;
  transition: all 0.5s;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const SectionChart = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 24px;
  height: 400px;

  transition: all 0.5s;
  @media (max-width: 768px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
  @media (max-width: 350px) {
    height: 250px;
  }
`;

const SectionTab = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 24px;
  transition: all 0.5s;
  @media (max-width: 1000px) {
    overflow-x: scroll;
    margin-top: 40px;
    margin-bottom: 0px;
  }
`;

const TabEach = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0px 24px 8px 24px;
  height: 50px;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  /* identical to box height, or 18px */

  letter-spacing: 0.01em;
  user-select: none;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
`;

const SectionTableBlockValdiated = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 24px;
`;

export default ValidatorDetails;
