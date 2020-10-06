import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../images";
import Skill from "../Components/Skill";

const ani__bounce = keyframes`
  0% { transform: translateY(-50px); opacity: 0; }
`;

const ani__rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const ani__combine = keyframes`
  0% {
    transform: translate(-12px, -12px);
  }
  50% {
    transform: translate(-5px,-5px);
  }
  100% {
    transform: translate(-12px, -12px);
  }
`;

const ani__combine2 = keyframes`
  0% {
    transform: translate(-27px, -27px);
  }
  50% {
    transform: translate(-13px,-13px);
  }
  100% {
    transform: translate(-27px, -27px);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  animation: ${ani__bounce} 1s;
`;

const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding-top: 50px;
`;

const AvatarColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-self: baseline;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.black};
  position: relative;
  animation: ${ani__bounce} 1s;
  &::after {
    content: "";
    width: 80px;
    height: 80px;
    border: 2px solid ${(props) => props.theme.black};
    position: absolute;
    top: 50px;
    right: 70px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.white};
    transform-origin: 50% 65%;
    animation: ${ani__rotate} 3s linear infinite;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border: 2px solid ${(props) => props.theme.black};
    transform: translate(-20px, -20px);
  }
`;

const Avatar = styled.img``;

const Square = styled.div`
  width: 180px;
  height: 60px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  position: absolute;
  bottom: 100px;
  left: 60px;
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.black};
  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.black};
  }
  &::before {
    transform: translate(-12px, -12px);
    animation: ${ani__combine} 2s linear infinite;
  }
  &::after {
    content: "YUNA LEE";
    transform: translate(-27px, -27px);
    animation: ${ani__combine2} 2s linear infinite;
  }
`;

const InfoColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: end;
  text-align: right;
  padding-top: 20px;
  padding-right: 40px;
  font-weight: 700;
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 6px 0;
  margin-bottom: 20px;
  letter-spacing: 2px;
  border-top: 2px solid ${(props) => props.theme.black};
`;

const Info = styled.div``;

const Experience = styled.div`
  margin-top: 50px;
`;

const Certificate = styled.div`
  margin-top: 50px;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 12px;
`;

const Wrap = styled.div`
  margin: 60px 0 80px;
`;

const ETitle = styled(Title)`
  border-top: 2px solid ${(props) => props.theme.black};
  margin-bottom: 0;
  text-align: right;
`;

const Skills = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: ${ani__bounce} 1s;
  padding-top: 50px;
`;

const ESkill = styled(Skill)``;

export default () => {
  console.log(data);
  return (
    <Wrapper>
      <AboutContainer>
        <AvatarColumn>
          <Avatar src={data[3]} alt="아바타" />
          <Square />
        </AvatarColumn>
        <InfoColumn>
          <Info>
            <Experience>
              <Name>이유나</Name>
              <Title>EXPERIENCE</Title>
              <Text>(주)볼록 웹, 모바일 디자인</Text>
              <Text>싸이월드 X 볼록 "싸이북" 책 &amp; 모바일</Text>
              <Text>키즈노트 X 볼록 "키즈노트북" 모바일</Text>
              <Text>네이버 밴드 X 볼록 "밴드북" 책 &amp; 모바일</Text>
              <Text>클래스팅 X 볼록 "클래스팅북" 웹</Text>
              <Text>여행노트 X 볼록 "여행노트" 모바일</Text>
              <Text>카카오스토리 X 볼록 "카스북" 웹</Text>
              <Text>윙퍼 애완동물 웹 &amp; 모바일</Text>
            </Experience>
            <Certificate>
              <Title>CERTIFICATE</Title>
              <Text>운전면허 1종</Text>
              <Text>패션머천다이징 산업기사</Text>
              <Text>컬러리스트 산업기사</Text>
              <Text>GTQ 포토샵 1급 한국생산성본분 발급</Text>
            </Certificate>
          </Info>
        </InfoColumn>
      </AboutContainer>
      <Wrap>
        <ETitle>SKILLS</ETitle>
        <Skills>
          <ESkill />
        </Skills>
      </Wrap>
    </Wrapper>
  );
};
