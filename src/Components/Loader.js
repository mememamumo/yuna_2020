import React from "react";
import styled, { keyframes } from "styled-components";

const ani__circle = keyframes`
	0% {
		border-radius: 0 0 0 0;
		background-color: #00E7C2;
		transform: rotate(0deg);
	}
	25% {
		border-radius: 50% 0 0 0;
		background-color: #c9c9c9;
		transform: rotate(45deg);
	}
	50% {
		border-radius: 50% 50% 0 0;
		background-color: #F4D300;
		transform: rotate(90deg);
	}
	75% {
		border-radius: 50% 50% 50% 0;
		background-color: #00E7C2;
		transform: rotate(135deg);
	}
	100% {
		border-radius: 50% 50% 50% 50%;
		background-color: #c9c9c9;
		transform: rotate(180deg);
	}
`;

const Circle = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${(props) => props.theme.pointHoverColor};
	animation: ${ani__circle} 1s infinite alternate;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 9999;
`;

const Loader = () => {
  return <Circle />;
};

export default Loader;
