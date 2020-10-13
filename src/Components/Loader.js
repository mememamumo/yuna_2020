import React from "react";
import styled, { keyframes } from "styled-components";

const ani__circle = keyframes`
	0% {
		background-color: wheat;
	}
	25% {
		background-color: burlywood;
	}
	50% {
		background-color: peru;
	}
	75% {
		background-color: wheat;
	}
	100% {
		background-color: burlywood;
	}
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.pointColor};
	animation: ${ani__circle} 2s infinite alternate;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 9999;
`;

const Loader = () => {
  return <Circle />;
};

export default Loader;
