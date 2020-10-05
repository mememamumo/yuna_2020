import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const thumb__ani = keyframes`
	0% {
		background-size: 100%;
	}
	100% {
		background-size: 200%;
	}
`;

const ani__bounce = keyframes`
  0% { transform: translateY(-50px); opacity: 0; }
`;

const Wrapper = styled.li`
  width: calc(100% margin);
  display: flex;
  flex-direction: column;
  &:nth-child(2n) {
    margin: 20px 0 20px 20px;
  }
  &:nth-child(odd) {
    margin: 20px 20px 20px 0;
  }
  animation: ${ani__bounce} 1s;
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding: 10px 0;
`;

const HeaderColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid ${(props) => props.theme.black};
  padding: 10px 0;
`;

const Title = styled.div`
  width: 70px;
`;

const ETitle = styled(Title)`
  align-self: flex-start;
  margin-top: 3px;
`;

const Text = styled.div`
  width: calc(100% - 70px);
  line-height: 1.2;
`;

const List = styled.span`
  display: inline-block;
  margin-right: 5px;
  &:not(:last-child)::after {
    content: ",";
  }
`;

const Wrap = styled.div`
  animation: ${ani__bounce} 1s;
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  padding-top: 450px;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  &:hover {
    background-size: 200%;
    animation: ${thumb__ani} 0.3s;
  }
`;

const Item = (props) => {
  console.log(props);
  return (
    <Wrapper>
      <Link to={`/item/${props.id}`}>
        <Wrap>
          <Thumbnail bg={props.thumbnail}></Thumbnail>
        </Wrap>
        <Header>
          <HeaderColumn>
            <Title>TITLE</Title>
            <Text>{props.title}</Text>
          </HeaderColumn>
          <HeaderColumn>
            <ETitle>SKILL</ETitle>
            <Text>
              {props.skills.map((skill, index) => (
                <List key={index}>{skill}</List>
              ))}
            </Text>
          </HeaderColumn>
        </Header>
      </Link>
    </Wrapper>
  );
};

export default Item;
