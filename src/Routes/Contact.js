import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../images";
import MoveStars from "../Components/MoveStars";

const ani__bounce = keyframes`
  0% { transform: translateY(-250px); opacity: 0; }
`;

const Wrapper = styled.div``;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  z-index: 0;
`;

const InfoColumn = styled.div`
  font-weight: 700;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
	align-items: center;
	max-width: 50%
  text-align: center;
  position: relative;
	z-index: 8;
	min-height: calc(100vh - 440px);
	letter-spacing: 2px;
	animation: ${ani__bounce} 2s;
`;

const Name = styled.div`
  font-size: 40px;
  background-color: ${(props) => props.theme.white};
  padding: 2px 4px;
  animation: ${ani__bounce} 1s;
`;

const Title = styled.div`
  margin-top: 60px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.white};
  border-bottom: 4px solid ${(props) => props.theme.white};
`;
const Text = styled.div`
  margin-top: 20px;
  color: ${(props) => props.theme.white};
`;

const TextLink = styled.a`
  margin-top: 20px;
  color: ${(props) => props.theme.white};
`;

export default () => {
  console.log(data[1]);
  return (
    <>
      <Background bg={data[5]}></Background>
      <Wrapper>
        <InfoColumn>
          <Name>이유나</Name>
          <Title>EMAIL</Title>
          <Text>carnivalss@naver.com</Text>
          <Title>GITHUB</Title>
          <TextLink href="https://github.com/mememamumo" target="_blank">
            https://github.com/mememamumo
          </TextLink>
        </InfoColumn>
        <MoveStars />
      </Wrapper>
    </>
  );
};
