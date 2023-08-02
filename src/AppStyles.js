import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f3f5d2;
`;

export const List = styled.ul`
  list-style-type: none;
  width: 50%;
`;

export const ListItem = styled.li`
  border: 1px solid salmon;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-style: italic;
  font-weight: 900;
  color: purple;
  text-align: center;
`;

export const Description = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  color: maroon;
  text-align: center;
`;
