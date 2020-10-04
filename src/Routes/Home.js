import React from "react";
import { Helmet } from "react-helmet";
import styled, { keyframes } from "styled-components";
import data from "../images";

const marquee__left = keyframes`
  0% { left: 0; }
  100% { left: -100%; }
`;

const marquee__right = keyframes`
  0% { left: -100%; }
  100% { left: 0; }
`;

const ani__bounce = keyframes`
  0% { transform: translateY(-250px); opacity: 0; }
`;

const ani__bounce1 = keyframes`
  0% {  opacity: 0; }
  70% { transform: translateY(-20px); opacity: 0;}
`;

const ani__show = keyframes`
  0% { opacity: 0; right: -100px;}
`;

const ani__show2 = keyframes`
  0% { opacity: 0; left: -300px;}
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 380px);
`;

const Main = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 7;
`;

const Name = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: flex-start;
  margin-top: 70px;
  animation: ${ani__bounce} 1s;
`;

const Title = styled.div`
  font-size: 70px;
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  margin-bottom: 150px;
  animation: ${ani__bounce1} 1.3s;
`;

const SubTitle = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  height: 200px;
`;

const FirstWrap = styled.div`
  display: block;
  width: 200%;
  height: 200px;
  position: absolute;
  overflow: hidden;
  animation: ${marquee__left} 7s linear infinite;
`;

const SecondWrap = styled.div`
  display: block;
  width: 200%;
  height: 200px;
  position: absolute;
  top: 40px;
  overflow: hidden;
  animation: ${marquee__right} 7s linear infinite;
`;

const ThirdWrap = styled.div`
  display: block;
  width: 200%;
  height: 200px;
  position: absolute;
  top: 80px;
  overflow: hidden;
  animation: ${marquee__left} 9s linear infinite;
`;

const Text = styled.div`
  width: 50%;
  font-size: 30px;
  white-space: nowrap;
`;

const ImageWrap = styled.div``;

const BigImage = styled.img`
  position: absolute;
  top: 10%;
  left: 0;
  width: 40%;
  animation: ${ani__show2} 2s;
`;

const SmallImage = styled.img`
  position: absolute;
  bottom: 300px;
  right: 0;
  width: 30%;
  animation: ${ani__show} 3s;
`;

export default () => {
  return (
    <>
      <Helmet>
        <title>Yuna Lee 2020</title>
      </Helmet>
      <Wrapper>
        <Main>
          <Name>YUNA LEE</Name>
          <Title>FRONT-END DEVELOPER</Title>
          <SubTitle>
            <FirstWrap>
              <Text>
                Javascript / ES6 / HTML5 / CSS3 / React / Hooks / Babel / Pug /
                Sass,Scss / NodeJs / GraphQL / Apollo / Express / MongoDB /
                Mongoose / Passport.js / Git / Javascript / ES6 / HTML5 / CSS3 /
                React / Hooks / Babel / Pug / Sass,Scss / NodeJs / GraphQL /
                Apollo / Express / MongoDB / Mongoose / Passport.js / Git
              </Text>
            </FirstWrap>
            <SecondWrap>
              <Text>
                Javascript / ES6 / HTML5 / CSS3 / React / Hooks / Babel / Pug /
                Sass,Scss / NodeJs / GraphQL / Apollo / Express / MongoDB /
                Mongoose / Passport.js / Git / Javascript / ES6 / HTML5 / CSS3 /
                React / Hooks / Babel / Pug / Sass,Scss / NodeJs / GraphQL /
                Apollo / Express / MongoDB / Mongoose / Passport.js / Git
              </Text>
            </SecondWrap>
            <ThirdWrap>
              <Text>
                Javascript / ES6 / HTML5 / CSS3 / React / Hooks / Babel / Pug /
                Sass,Scss / NodeJs / GraphQL / Apollo / Express / MongoDB /
                Mongoose / Passport.js / Git / Javascript / ES6 / HTML5 / CSS3 /
                React / Hooks / Babel / Pug / Sass,Scss / NodeJs / GraphQL /
                Apollo / Express / MongoDB / Mongoose / Passport.js / Git
              </Text>
            </ThirdWrap>
          </SubTitle>
        </Main>
        <ImageWrap>
          <BigImage src={data[0]} alt="배경 이미지 1" />
          <SmallImage src={data[1]} alt="배경 이미지 2" />
        </ImageWrap>
      </Wrapper>
    </>
  );
};
