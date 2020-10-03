import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/Logo.svg";
import Nav from "./Nav";

const Header = styled.header`
  width: 100%;
  margin: 40px 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  min-height: 150px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderColumn = styled.div``;

const LogoLink = styled(Link)`
  width: 150px;
  height: 150px;
  position: relative;
  &::before {
    content: "";
    width: 110px;
    height: 110px;
    background-color: ${(props) => props.theme.pointColor};
    display: block;
    position: absolute;
    top: 20px;
    right: 0;
    z-index: 0;
    border-radius: 50%;
    transition: 0.3s;
  }
  &:hover::before {
    background-color: ${(props) => props.theme.pointHoverColor};
  }
`;

const LogoImg = styled.img`
  position: relative;
  z-index: 1;
`;

export default () => {
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <LogoLink to="/">
            <LogoImg src={Logo} alt="Logo" />
          </LogoLink>
        </HeaderColumn>
        <HeaderColumn>
          <Nav />
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
};
