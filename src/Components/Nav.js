import React from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const circle__ani = keyframes`
	0% {
		left: -100px;
		width: 60px;
		height:24px;
	}
	50% {
		left: -30px;
	}
	100% {
		left:-30px;
	}
`;

const ENavLink = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 2px;
  margin: 3px 0;
  position: relative;
  &.active {
    color: ${(props) => props.theme.lightGray};
  }
  &.active::before {
    color: red;
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.pointHoverColor};
    position: absolute;
    display: inline-block;
    left: -30px;
    top: 3px;
    animation: ${circle__ani} 0.3s;
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
