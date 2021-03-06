import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../db";
import { Github, Demo } from "../Components/Icons";

const Wrapper = styled.div`
  margin-top: 20px;
`;

const ItemBox = styled.div``;

const MetaContainer = styled.div``;

const MetaHeader = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center 69%;
  @media ${(props) => props.theme.mobile} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(256,256,256,0.3);
      width: 100%;
      height: 100%;
    }
  }
`;

const Area = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 60px;
  font-weight: 700;
  position: absolute;
  bottom: -50px;
  @media ${(props) => props.theme.mobile} {
    font-size: 50px;
  }
`;

const MetaInfo = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 90px 0 70px;
  font-weight: 700;
  font-size: 20px;
  @media ${(props) => props.theme.mobile} {
    padding: 90px 14px 70px;
  }
`;

const MetaLink = styled.div`
  margin: 20px 0 50px;
  @media ${(props) => props.theme.mobile} {
    margin: 20px 0 10px;
  }
`;

const Githubs = styled.div`
  display: flex;
  margin-bottom: 10px;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const GithubLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:not(:last-child) {
    margin-right: 10px;
  }
  svg {
    transition: 0.3s;
  }
  &:hover svg {
    fill: ${(props) => props.theme.pointHoverColor};
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 10px;
  }
`;

const DemoLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: block;
  position: relative;
  svg {
    transition: 0.3s;
  }
  &:hover svg {
    fill: ${(props) => props.theme.pointHoverColor};
  }
  p {
    visibility: hidden;
    opacity: 0;
  }
  &:hover p {
    visibility: visible;
    opacity: 1;
    color: ${(props) => props.theme.black};
  }
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 90px;
    p {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Notice = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  padding: 4px 8px;
  // dropdown point
  position: absolute;
  width: 500px;
  word-wrap: normal;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const Text = styled.span`
  margin-left: 8px;
`;

const WhatIDo = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const DoList = styled.div`
  background-color: ${(props) => props.theme.lightGray};
  padding: 5px 7px;
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

const Skills = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40px;
  line-height: 1.2;
`;

const SkillTitle = styled.li`
  margin-right: 10px;
  background-color: ${(props) => props.theme.lightGray};
  padding: 4px 8px;
`;

const List = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }
  &:not(:last-child)::after {
    content: ",";
  }
`;

const Description = styled.div`
  margin-top: 30px;
  line-height: 1.4;
`;

const MetaImages = styled.div``;

const Img = styled.img`
  margin-top: 10px;
`;

const MobileImages = styled.div`
  margin-top: 10px;
  padding: 60px 10% 50px;
  background-color: ${(props) => props.theme.bgBlackColor};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const MobileImg = styled.img`
  width: 30%;
  margin-top: 60px;
`;

const Functions = styled.ul`
  margin-top: 30px;
  line-height: 1.6;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  @media ${(props) => props.theme.mobile} {
    margin-left: 20px;
  }
`;

const FuncList = styled.li`
  width: 50%;
  padding-left: 20px;
  border-left: 5px solid ${(props) => props.theme.lightGray};
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const SeeItem = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <MapToItem
            key={item.id}
            id={item.id}
            title={item.title}
            thumbnail={item.thumbnail}
            images={item.images}
            mobileImages={item.mobileImages}
            year={item.year}
            front={item.front}
            back={item.back}
            publishing={item.publishing}
            description={item.description}
            skills={item.skills}
            github={item.github}
            link={item.link}
            notice={item.notice}
            list={item.list}
          />
        );
      })}
    </div>
  );
};

const MapToItem = withRouter(
  ({
    location: { pathname },
    id,
    title,
    thumbnail,
    images,
    mobileImages,
    year,
    front,
    back,
    publishing,
    description,
    skills,
    github,
    link,
    notice,
    list
  }) => {
    const page = pathname.split("/")[2];
    return (
      <>
        {id === page && (
          <>
            <Helmet>
              <title>{title} | Yuna Lee 2020</title>
            </Helmet>
            <Wrapper>
              <ItemBox>
                <MetaHeader bg={thumbnail}>
                  <Area>
                    <Title>
                      {title} / {year}
                    </Title>
                  </Area>
                </MetaHeader>
                <MetaContainer>
                  <MetaInfo>
                    <MetaLink>
                      <Githubs>
                        {github ? (github.map((git, index) => (
                          <GithubLink key={index} href={git} target="_blank">
                            <Github size={22} />
                            <Text key={index}>{git.split("/")[4]}</Text>
                          </GithubLink>
                        ))) : null}
                      </Githubs>
                      {link ? (
                        <DemoLink href={link} target="_blank">
                          <Demo size={20} />
                          <Text>사이트 보기</Text>
                          {notice ? <Notice>{notice}</Notice> : null}
                        </DemoLink>
                      ) : null}
                    </MetaLink>
                    <WhatIDo>
                      {front ? <DoList>Front-end: {front}</DoList> : null}
                      {back ? <DoList>Back-end: {back}</DoList> : null}
                      {publishing ? <DoList>Web-publishing: {publishing}</DoList> : null}
                    </WhatIDo>
                    <Skills>
                      <SkillTitle>Skills</SkillTitle>
                      {skills.map((skill, index) => (
                        <List key={index}>{skill}</List>
                      ))}
                    </Skills>
                    <Description>{description}</Description>
                    <Functions>
                      {list.map((func, index) => (
                        <FuncList key={index}>{func}</FuncList>
                      ))}
                    </Functions>
                  </MetaInfo>
                  <MetaImages>
                    {images.map((image, index) => (
                      <Img
                        key={index}
                        src={image}
                        alt={`${title}의 이미지 ${index + 1}`}
                      />
                    ))}
                  </MetaImages>
                  <MobileImages>
                    {mobileImages.map((image, index) => (
                      <MobileImg
                        key={index}
                        src={image}
                        alt={`${title}의 이미지 ${index + 1}`}
                      />
                    ))}
                  </MobileImages>
                </MetaContainer>
              </ItemBox>
            </Wrapper>
          </>
        )}
      </>
    );
  }
);

export default SeeItem;
