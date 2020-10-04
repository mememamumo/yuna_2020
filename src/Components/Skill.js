import React from "react";
import styled from "styled-components";
import data from "../logos";

const getSize = (size) => {
  let number;
  if (size === "sm") {
    number = 45;
  } else if (size === "md") {
    number = 60;
  }
  return `
		width: ${number}px;
		height: ${number}px;
	`;
};

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:not(:last-child) {
    margin-right: 14px;
  }
`;

const Img = styled.img`
  ${(props) => getSize(props.size)};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  border: 6px solid #fff;
`;

const Text = styled.div`
  font-weight: 700;
  margin-top: 10px;
`;

export default ({ size = "md" }) => {
  const skillLogo = data[0].skills;
  return (
    <>
      {skillLogo.map((logo, index) => (
        <Wrapper key={index}>
          <Img
            key={index}
            src={logo.url}
            alt={`${logo.title}의 로고 이미지`}
            size={size}
          />
          <Text>{logo.title}</Text>
        </Wrapper>
      ))}
    </>
  );
};
