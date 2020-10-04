import React from "react";
import styled from "styled-components";
import data from "../images";

const Wrapper = styled.div``;

const Avatar = styled.img``;

const Info = styled.div``;

const Name = styled.div`
  font-weight: 700;
  font-size: 28px;
`;

const Experience = styled.div``;

const Certificate = styled.div``;

const Text = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const Skills = styled.ul``;

export default () => {
  return (
    <Wrapper>
      <Avatar src={data[1]} alt="아바타" />
      <Info>
        <Name>이유나 / YUNA LEE</Name>
        <Experience>
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
          <Text>운전면허 1종</Text>
          <Text>패션머천다이징 산업기사</Text>
          <Text>컬러리스트 산업기사</Text>
          <Text>GTQ 포토샵 1급 한국생산성본분 발급</Text>
        </Certificate>
        <Skills>{/* <Skill></Skill> */}</Skills>
      </Info>
    </Wrapper>
  );
};
