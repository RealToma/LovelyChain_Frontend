import styled from "styled-components";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { dataFooterContact, dataFooterIconContact } from "../Data/Contact";
import imgLogo from "../Assets/Images/Icon/logoMark.png";

const Footer = () => {
  const theme = useTheme();
  return (
    <StyledComponent>
      <SectionLeft>
        <SectionLogo>
          <img src={imgLogo} width={"100%"} alt="" />
        </SectionLogo>
        <TextLogoDescription color={theme.palette.link.main + 48}>
          BscScan is a Block Explorer and Analytics Platform for BNB Smart Chain
        </TextLogoDescription>
        <GroupIconContact>
          {dataFooterIconContact.map((each, index) => {
            return (
              <Link to={each.link} target="_blank" rel="noopener noreferrer">
                <IconContact
                  key={index}
                  color={theme.palette.link.fIconContactColor}
                  bgcolor={theme.palette.link.fIconContacctBack}
                  border={theme.palette.link.fIconContactBorder}
                >
                  {each.icon}
                </IconContact>
              </Link>
            );
          })}
        </GroupIconContact>
      </SectionLeft>
      <SectionRight>
        {dataFooterContact.map((each, index) => {
          return (
            <EachTextContactGroup key={index}>
              <TextHeader color={theme.palette.link.main}>
                {each.name}
              </TextHeader>
              {each.subLink.map((subLink, index) => {
                return (
                  <Link
                    to={subLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <EachTextContactLink
                      key={index}
                      color={theme.palette.link.main + 48}
                    >
                      {subLink.name}
                    </EachTextContactLink>
                  </Link>
                );
              })}
            </EachTextContactGroup>
          );
        })}
      </SectionRight>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SectionRight = styled(Box)`
  display: flex;
`;

const SectionLogo = styled(Box)`
  display: flex;
  width: 200px;
  height: 28px;
  user-select: none;
  cursor: pointer;
`;

const TextLogoDescription = styled(Box)`
  display: flex;
  width: 300px;
  font-family: "Neue Plak";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
  /* or 22px */

  letter-spacing: 0.01em;
  margin-top: 25px;
`;

const GroupIconContact = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

const IconContact = styled(Box)`
  display: flex;
  width: 54px;
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1.3rem;
  margin-right: 12px;
  cursor: pointer;
`;

const EachTextContactGroup = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 132px;
`;

const TextHeader = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  /* White */

  margin-bottom: 32px;
`;

const EachTextContactLink = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  text-transform: capitalize;

  /* Secondary 2 */
  margin-bottom: 32px;
`;

export default Footer;
