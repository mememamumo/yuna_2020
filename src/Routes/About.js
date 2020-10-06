import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../images";
import Skill from "../Components/Skill";

const ani__bounce = keyframes`
  0% { transform: translateY(-50px); opacity: 0; }
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
  margin-bottom: 80px;
`;

const AvatarColumn = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-self: baseline;
  flex-direction: column;
  overflow: hidden;
`;

const Avatar = styled.img`
  animation: ${ani__bounce} 1.5s;
`;

const InfoColumn = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: end;
  text-align: right;
  padding-right: 40px;
  font-weight: 700;
`;

const Name = styled.div`
  font-size: 30px;
  letter-spacing: 1px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => props.theme.lightGray};
  padding: 4px 6px;
  margin-bottom: 30px;
  letter-spacing: 1px;
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

const Skills = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-wrap: wrap;
  animation: ${ani__bounce} 1s;
  border-top: 1px solid ${(props) => props.theme.black};
  padding-top: 30px;
`;

const ESkill = styled(Skill)``;

const Img = styled.img`
  margin-top: 40px;
  animation: ${ani__bounce} 1.5s;
`;

export default () => {
  console.log(data);
  return (
    <Wrapper>
      <AboutContainer>
        <AvatarColumn>
          <Avatar src={data[3]} alt="아바타" />
          <Skills>
            <ESkill />
          </Skills>
        </AvatarColumn>
        <InfoColumn>
          <Name>이유나 / YUNA LEE</Name>
          <Info>
            <Experience>
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
            {/* <Img src={data[9]} alt="이미지" /> */}
          </Info>
        </InfoColumn>
      </AboutContainer>
    </Wrapper>
  );
};
