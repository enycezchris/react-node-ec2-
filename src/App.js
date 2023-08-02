import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Title, Description, List, ListItem } from "./AppStyles";

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get("http://3.142.12.33:3001/").then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <Container>
      {items?.map((item) => {
        return (
          <List key={item.id}>
            <ListItem>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </ListItem>
          </List>
        );
      })}
    </Container>
  );
};

export default App;
