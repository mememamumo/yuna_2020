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
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    padding: 50px 14px 0;
  }
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
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    align-self: center;
  }
`;

const Avatar = styled.img``;

const InfoColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: end;
  text-align: right;
  padding-right: 50px;
  font-weight: 700;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding-right: 0;
  }
`;

const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
  margin-left: 10px;
  text-align: left;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: flex-start;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 17px 0 0 14px;
  margin-bottom: 30px;
  letter-spacing: 2px;
  text-align: left;
  border-top: 2px solid ${(props) => props.theme.black};
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
  }
`;

const Info = styled.div``;

const Experience = styled.div`
  @media ${(props) => props.theme.mobile} {
    margin-top: 30px;
  }
`;

const Certificate = styled.div`
  margin-top: 50px;
`;

const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 15px;
  margin-right: 40px;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    margin-right: 0;
  }
`;

const Wrap = styled.div`
  margin: 60px 0 80px;
  @media ${(props) => props.theme.mobile} {
    padding: 0 14px;
    margin: 50px 0 20px;
  }
`;

const ETitle = styled(Title)`
  border-top: 2px solid ${(props) => props.theme.black};
  margin-bottom: 0;
  text-align: left;
  @media ${(props) => props.theme.mobile} {
    padding-top: 10px;
  }
`;

const Skills = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  animation: ${ani__bounce} 1s;
  padding-top: 50px;
  @media ${(props) => props.theme.mobile} {
    padding-top: 30px;
  }
`;

const ESkill = styled(Skill)``;

export default () => {
  console.log(data);
  return (
    <Wrapper>
      <AboutContainer>
        <AvatarColumn>
          <Avatar src={data[3]} alt="아바타" />
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
