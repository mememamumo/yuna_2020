import React from "react";
import styled, { keyframes } from "styled-components";
import data from "../images";
import Skill from "../Components/Skill";
import LogoHover from "../Assets/Images/LogoHover.svg";

const ani__bounce = keyframes`
  0% { transform: translateY(-50px); opacity: 0; }
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  animation: ${ani__bounce} 1s;
`;

const Box = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
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
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-self: baseline;
  flex-direction: column;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Avatar = styled.img`
  border-top: 3px solid ${props => props.theme.black};
  padding: 30px 0;
`;

const InfoColumn = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-self: end;
  text-align: left;
  font-weight: 700;
  position: relative;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding-right: 0;
  }
`;

const Info = styled.div``;

const AboutColumn = styled.div`
  margin-bottom: 30px;
  position: relative;
`;

const Name = styled.div`
  display: inline-block;
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: left;
  margin-bottom: 20px;
  border-bottom: 3px solid ${(props) => props.theme.black};
  @media ${(props) => props.theme.mobile} {
    margin-top: 40px;
  }
`;

const Title = styled.span`
  display: inline-block;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 20px;
  border-bottom: 3px solid ${(props) => props.theme.black};
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  padding-left: 30px;
`;

const Wrap = styled.div`
  margin: 20px 0 80px;
  @media ${(props) => props.theme.mobile} {
    padding: 0 14px;
    margin: 0 0 20px;
  }
`;

const ETitle = styled(Title)`
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
  padding-top: 30px;
  position: relative;
  z-index: 2;
`;

const ESkill = styled(Skill)``;

const LogoImg = styled.svg`
  position: absolute;
  bottom: -180px;
  right: 0;
  width: 250px;
  height: 250px;
  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const Circle = styled.div`
  position: absolute;
  bottom: -180px;
  right: 20px;
  width: 180px;
  height: 180px;
  background-color: ${props => props.theme.pointHoverColor};
  border-radius: 50%;
`;

const ECircle = styled(Circle)`
  background-color: ${props => props.theme.pointColor};
  width: 130px;
  height: 130px;
  right: 150px;
  z-index: 0;
`;

export default () => {
  console.log(data);
  return (
    <Wrapper>
      <Box>
        <AboutContainer>
          <AvatarColumn>
            <Avatar src={data[3]} alt="아바타" />
            <LogoImg bg={LogoHover} />
            <ECircle />
          </AvatarColumn>
          <InfoColumn>
            <Info>
              <AboutColumn>
                <Name>이유나 / YUNA LEE</Name>
                <Text>1985년 7월 19일</Text>
                <Text>2008 안양대학교 경영학과 졸업</Text>
                <Text>2009-2014 여성의류 쇼핑몰 운영</Text>
                <Text>2014-2018 볼록 근무</Text>
                <Text>2018-2019 몰타 어학연수</Text>
                <Text>2019-2020 윙텍 근무</Text>
                <Circle />
              </AboutColumn>
              <AboutColumn>
                <Title>EXPERIENCE</Title>
                <Text>(주)볼록 웹 코딩, 모바일 디자인</Text>
                <Text>싸이월드 X 볼록 "싸이북" 책 &amp; 모바일 코딩</Text>
                <Text>키즈노트 X 볼록 "키즈노트북" 모바일 코딩</Text>
                <Text>네이버 밴드 X 볼록 "밴드북" 책 &amp; 모바일 코딩</Text>
                <Text>클래스팅 X 볼록 "클래스팅북" 웹 코딩</Text>
                <Text>여행노트 X 볼록 "여행노트" 모바일 코딩</Text>
                <Text>카카오스토리 X 볼록 "카스북" 웹 코딩</Text>
                <Text>윙퍼 애완동물 웹 &amp; 모바일 코딩</Text>
              </AboutColumn>
              <AboutColumn>
                <Title>CERTIFICATE</Title>
                <Text>2007 운전면허 1종</Text>
                <Text>2008 패션머천다이징 산업기사</Text>
                <Text>2009 컬러리스트 산업기사</Text>
                <Text>2014 GTQ 포토샵 1급 한국생산성본분 발급</Text>
              </AboutColumn>
            </Info>
          </InfoColumn>
        </AboutContainer>
        <Wrap>
          <ETitle>SKILLS</ETitle>
          <Skills>
            <ESkill />
          </Skills>
        </Wrap>
      </Box>
    </Wrapper>
  );
};
