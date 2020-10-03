import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Items from "../Components/Items";

const Wrapper = styled.div`
  min-height: calc(100vh - 380px);
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
`;

const ItemsWrapper = styled.div``;

export default () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Project | Yuna Lee 2020</title>
      </Helmet>
      <ItemsWrapper>
        <Items />
      </ItemsWrapper>
    </Wrapper>
  );
};
