import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../images";
import MoveStars from "../Components/MoveStars";

const ani__bounce = keyframes`
  0% { transform: translateY(-250px); opacity: 0; }
`;

const Wrapper = styled.div`
  ${(props) => props.theme.grid}
  @media ${(props) => props.theme.mobile} {
    min-height: calc(100vh - 390px);
  }
`;

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
  justify-content: flex-start;
	align-items: center;
	max-width: 50%
  text-align: center;
  position: relative;
	z-index: 8;
	min-height: calc(100vh - 440px);
	letter-spacing: 2px;
  animation: ${ani__bounce} 2s;
  padding-top: 130px;
  @media ${(props) => props.theme.mobile} {
    padding-top: 30px;
    padding-bottom: 50px;
  }
`;

const Name = styled.div`
  font-size: 40px;
  background-color: ${(props) => props.theme.white};
  padding: 2px 4px;
  animation: ${ani__bounce} 1s;
  @media ${(props) => props.theme.mobile} {
    font-size: 28px;
  }
`;

const Title = styled.div`
  margin-top: 60px;
  padding-bottom: 10px;
  color: ${(props) => props.theme.white};
  border-bottom: 4px solid ${(props) => props.theme.white};
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

const Text = styled.div`
  margin-top: 20px;
  color: ${(props) => props.theme.white};
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
    font-weight: 400;
  }
`;

const TextLink = styled.a`
  margin-top: 20px;
  color: ${(props) => props.theme.white};
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
    font-weight: 400;
  }
`;

export default () => {
  console.log(data[1]);
  return (
    <>
      <Background bg={data[1]}></Background>
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
