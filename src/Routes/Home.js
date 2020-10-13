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

const ani__rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ani__rotate2 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const ani__bounce2 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-300px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  min-height: calc(100vh - 440px);
  padding-bottom: 80px;
  ${(props) => props.theme.grid};
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
  color: ${(props) => props.theme.white};
`;

const Title = styled.div`
  font-size: 70px;
  display: flex;
  justify-content: flex-end;
  margin-top: 100px;
  margin-bottom: 150px;
  animation: ${ani__bounce1} 1.3s;
  color: ${(props) => props.theme.pointHoverColor};
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

const Triangle = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  margin: auto;
  width: 0;
  height: 0;
  border-bottom: 258px solid black;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  transform-origin: 50% 65%;
  animation: ${ani__rotate} 6s linear infinite;
  p {
    position: relative;
    top: 3.5px;
    left: -147px;
    border-bottom: 252.84px solid white;
    border-left: 147px solid transparent;
    border-right: 147px solid transparent;
  }
`;

const Triangle2 = styled.div`
  position: absolute;
  bottom: 350px;
  left: 30px;
  margin: auto;
  width: 0;
  height: 0;
  border-bottom: 258px solid black;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  transform-origin: 50% 65%;
  animation: ${ani__rotate2} 6s linear infinite;
  p {
    position: relative;
    top: 3.5px;
    left: -147px;
    border-bottom: 252.84px solid white;
    border-left: 147px solid transparent;
    border-right: 147px solid transparent;
  }
`;

const Circle = styled.div`
  position: absolute;
  top: 200px;
  right: 200px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #000;
  transform-origin: 50% 65%;
  animation: ${ani__rotate2} 3s linear infinite;
`;

const Square = styled.div`
  position: absolute;
  bottom: 100px;
  left: 80px;
  width: 20px;
  height: 100px;
  background-color: #000;
  animation: ${ani__bounce2} 3s linear infinite;
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
          <Title>
            FRONT-END DEVELOPER
            <Square />
          </Title>
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
          <BigImage src={data[1]} alt="배경 이미지 1" />
          <SmallImage src={data[2]} alt="배경 이미지 2" />
        </ImageWrap>
        <Triangle>
          <p></p>
        </Triangle>
        <Triangle2>
          <p></p>
        </Triangle2>
        <Circle />
      </Wrapper>
    </>
  );
};
