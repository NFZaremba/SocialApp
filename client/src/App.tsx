import React, { useState, useEffect } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import axios from "axios";

interface IValues {
  id: number;
  name: string;
}

function App() {
  const [values, setValues] = useState<Array<IValues>>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/values");
        setValues(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, []);

  return (
    <div>
      <Header as="h2">
        <Icon name="users" />
        <Header.Content>SocialApp</Header.Content>
      </Header>
      <List>
        {values?.map((value) => (
          <List.Item key={value.id}>{value.name}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
