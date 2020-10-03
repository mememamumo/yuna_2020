import React from "react";
import styled from "styled-components";
import data from "../db";
import Item from "./Item.js";

const Wrapper = styled.ul`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const EItem = styled(Item)``;

const Items = () => {
  console.log(data);
  return (
    <Wrapper>
      {data.map((item) => (
        <EItem
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
        />
      ))}
    </Wrapper>
  );
};

export default Items;
