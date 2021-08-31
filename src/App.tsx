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

import { LOGIN_API_URL, OAUTH_API_URL } from "./constants";
import { LoginOAuth, OAuthResponse, LoginModel } from "./models/auth";
import { Register } from "./components/Authentication/Register/Register";
export const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function createOptions(data: LoginModel | LoginOAuth) {
    return {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    };
  }

  async function processEndpoint(
    endpoint: string,
    data: LoginModel | LoginOAuth
  ) {
    console.log("Endpoint: ", endpoint);

    try {
      const response = await fetch(endpoint, createOptions(data));
      console.log(response);

      return await response.json();
    } catch (e) {
      return e;
    }
  }

  async function standardLogin(data: LoginModel) {
    return await processEndpoint(LOGIN_API_URL, data);
  }

  async function oauthLogin(data: LoginOAuth) {
    return await processEndpoint(OAUTH_API_URL, data);
  }
  const loginHandler = (event: any) => {
    event.preventDefault();

    const response = standardLogin({ username, password });
    console.log(response);

    setUsername("");
    setPassword("");
  };

  const githubHandler = () => {};
  const discordHandler = () => {};

  const onUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Segment padded="very" vertical>
          <Register />
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
                    onChange={onUsernameChange}
                  />
                  <FormInput
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    fluid
                    value={password}
                    onChange={onPasswordChange}
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
