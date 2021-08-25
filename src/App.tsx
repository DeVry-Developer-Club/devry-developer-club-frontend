import React, { useState } from "react";
import { GlobalStyle } from "./AppStyle";
import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Container,
  Divider,
  Form,
  FormInput,
  Icon,
  Segment,
} from "semantic-ui-react";

export const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function connectEndpoint(apiEndpoint: string) {
    const endpoint = `https://localhost:5001${apiEndpoint}`;
    console.log(endpoint);

    const options = {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    try {
      const response = await fetch(endpoint, options);
      console.log(response);
      const data = await response.json();
      return data;
    } catch (e) {
      return e;
    }
  }

  const loginHandler = (event: any) => {
    event.preventDefault();

    connectEndpoint("/api/auth/login");

    setUsername("");
    setPassword("");
  };
  const githubHandler = () => {
    connectEndpoint("/api/oauth/signin?provider=GitHub");
  };
  const discordHandler = () => {
    connectEndpoint("/api/oauth/signin?provider=Discord");
  };

  const holdUsername = (event: any) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };
  const holdPassword = (event: any) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Segment padded="very" vertical>
          <Card centered>
            <CardContent>
              <Segment basic vertical>
                <h2>Test Login</h2>
                <Divider />
                <Form>
                  <FormInput
                    icon="user"
                    iconPosition="left"
                    placeholder="Username"
                    fluid
                    value={username}
                    onChange={holdUsername}
                  />
                  <FormInput
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    fluid
                    value={password}
                    onChange={holdPassword}
                  />
                  <ButtonGroup vertical fluid>
                    <Button onClick={loginHandler}>
                      <Icon name="key" /> Log In
                    </Button>
                  </ButtonGroup>
                </Form>
              </Segment>
              <ButtonGroup vertical fluid>
                <Button onClick={githubHandler}>
                  <Icon name="github" /> GitHub
                </Button>
                <Button onClick={discordHandler}>
                  <Icon name="discord" /> Discord
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        </Segment>
      </Container>
    </>
  );
};
