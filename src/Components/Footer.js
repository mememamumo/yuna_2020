import React from "react";
import styled from "styled-components";
import { Github } from "../Components/Icons";

const Footer = styled.footer`
  background-color: ${(props) => props.theme.bgBlackColor};
  color: ${(props) => props.theme.lightGray};
  width: 100%;
  font-size: 18px;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  min-height: 230px;
  margin: 0 auto;
  padding: 50px 0;
`;

const FooterColumn = styled.ul`
  margin-bottom: 14px;
`;

const EFooterColumn = styled(FooterColumn)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Iam = styled.li`
  font-weight: 700;
  margin-bottom: 7px;
`;

const List = styled.li`
  margin-left: 40px;
  font-weight: 700;
`;

const Title = styled.div`
  margin-bottom: 6px;
  text-align: right;
`;

const Text = styled.div``;

const Column = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled.a`
  svg {
    fill: ${(props) => props.theme.lightGray};
    transition: 0.3s;
  }
  &:hover svg {
    opacity: 0.7;
  }
`;

const Copyright = styled.div`
  font-weight: 700;
  display: flex;
  align-self: center;
  opacity: 0.3;
`;

export default () => {
  return (
    <Footer>
      <FooterWrapper>
        <FooterColumn>
          <Iam>WEB PUBLISHER</Iam>
          <Iam>FRONT-END DEVELOPER</Iam>
        </FooterColumn>
        <EFooterColumn>
          <List>
            <Title>EMAIL</Title>
            <Text>carnivalss@naver.com</Text>
          </List>
          <List>
            <Title>NAME</Title>
            <Text>YUNA LEE / 이유나</Text>
          </List>
        </EFooterColumn>
        <Column>
          <FooterLink href="https://github.com/mememamumo" target="_blank">
            <Github size={28} />
          </FooterLink>
          <Copyright>
            COPYRIGHT &copy; {new Date().getFullYear()} YUNA_LEE
          </Copyright>
        </Column>
      </FooterWrapper>
    </Footer>
  );
};
