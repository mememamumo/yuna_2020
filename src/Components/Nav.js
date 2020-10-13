import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const circle__ani = keyframes`
	0% {
		left: -100px;
		width: 60px;
	}
	50% {
		left: -10px;
	}
	100% {
    left:-20px;
	}
`;

const ENavLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 6px 0;
  padding: 0 6px;
  position: relative;
  &.active {
    color: ${(props) => props.theme.lightGray};
    background-color: ${(props) => props.theme.pointHoverColor};
  }
  &.active::before {
    color: red;
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.pointHoverColor};
    position: absolute;
    display: inline-block;
    left: -20px;
    top: 1px;
    animation: ${circle__ani} 0.3s;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 26px;
  }
`;

export default () => {
  return (
    <>
      <ENavLink exact activeClassName="active" to="/about">
        ABOUT
      </ENavLink>
      <ENavLink exact activeClassName="active" to="/project">
        PROJECT
      </ENavLink>
      <ENavLink exact activeClassName="active" to="/contact">
        CONTACT
      </ENavLink>
    </>
  );
};
