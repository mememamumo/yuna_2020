import React from "react";
import styled, { keyframes } from "styled-components";

const ani__circle = keyframes`
	0% {
		background-color: yellowgreen;
	}
	25% {
		background-color: darkseagreen;
	}
	50% {
		background-color: seagreen;
	}
	75% {
		background-color: yellowgreen;
	}
	100% {
		background-color: darkseagreen;
	}
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.pointColor};
	animation: ${ani__circle} 1s infinite alternate;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999;
`;

const Loader = () => {
  return <Circle />;
};

export default Loader;
