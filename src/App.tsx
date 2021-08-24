import React from "react";
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
  const loginHandler = () => {};
  const githubHandler = () => {};
  const discordHandler = () => {};

  return (
    <>
      <GlobalStyle />
      <Container>
        <Segment padded="very" vertical>
          <Card centered stacked>
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
                  />
                  <FormInput
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    fluid
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
