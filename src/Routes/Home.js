import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: calc(100vh - 380px);
`;

export default () => {
  return (
    <Wrapper>
      <Helmet>
        <title>Yuna Lee 2020</title>
      </Helmet>
      <div>It's Home. I can do it !</div>
    </Wrapper>
  );
};
