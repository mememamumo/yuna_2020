import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import data from "../db";
import { Github, Link } from "../Components/Icons";

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
  background-position: center;
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
`;

const MetaInfo = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 90px 0 70px;
  font-weight: 700;
  font-size: 20px;
`;

const MetaLink = styled.div`
  margin: 20px 0 30px;
`;

const Githubs = styled.div`
  display: flex;
  margin-bottom: 10px;
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
`;

const DemoLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    transition: 0.3s;
  }
  &:hover svg {
    fill: ${(props) => props.theme.pointHoverColor};
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

const MetaIamges = styled.div``;

const Img = styled.img`
  margin-top: 10px;
`;

const SeePost = () => {
  console.log(data);
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
            year={item.year}
            front={item.front}
            back={item.back}
            description={item.description}
            skills={item.skills}
            github={item.github}
            link={item.link}
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
    year,
    front,
    back,
    description,
    skills,
    github,
    link
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
                        {github.map((git, index) => (
                          <GithubLink key={index} href={git} target="_blank">
                            <Github size={22} />
                            <Text key={index}>{git.split("/")[4]}</Text>
                          </GithubLink>
                        ))}
                      </Githubs>
                      <DemoLink href={link} target="_blank">
                        <Link size={20} />
                        <Text>사이트 보기</Text>
                      </DemoLink>
                    </MetaLink>
                    <WhatIDo>
                      <DoList>Front-end: {front}</DoList>
                      {back ? <DoList>Back-end: {back}</DoList> : null}
                    </WhatIDo>
                    <Skills>
                      <SkillTitle>Skills</SkillTitle>
                      {skills.map((skill, index) => (
                        <List key={index}>{skill}</List>
                      ))}
                    </Skills>
                    <Description>{description}</Description>
                  </MetaInfo>
                  <MetaIamges>
                    {images.map((image, index) => (
                      <Img
                        key={index}
                        src={image}
                        alt={`${title}의 이미지 ${index + 1}`}
                      />
                    ))}
                  </MetaIamges>
                </MetaContainer>
              </ItemBox>
            </Wrapper>
          </>
        )}
      </>
    );
  }
);

export default SeePost;
