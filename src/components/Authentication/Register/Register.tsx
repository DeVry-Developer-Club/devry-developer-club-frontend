import React, { Component, useState } from "react";
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

import { REGISTER_API_URL } from "../../../constants";

export const Register = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
  });

  const createOptions = () => {
    const { username, password, email } = state;

    return {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };
  };

  async function handleRegister() {
    try {
      const response = await fetch(REGISTER_API_URL, createOptions());

      console.log(response);
      return await response.json();
    } catch (err) {
      return err;
    }
  }

  const submitHandler = (event: any) => {
    event.preventDefault();

    const response = handleRegister();
    console.log(response);

    setState({ username: "", password: "", email: "" });
  };

  const updateHandler = (event: any) => {
    console.log("Testing");
    setState({
      ...state,
      [event.target.id]: event.target.value,
    });
  };

  {
    const { username, email, password } = state;

    return (
      <>
        <Container>
          <Segment padded="very" vertical>
            <Card centered>
              <CardContent>
                <Segment basic vertical>
                  <h2>Test Register</h2>
                  <Divider />
                  <Form>
                    <FormInput
                      id="username"
                      icon="user"
                      iconPosition="left"
                      placeholder="Username"
                      fluid
                      value={username}
                      onChange={updateHandler}
                    />
                  </Form>

                  <FormInput
                    id="email"
                    icon="e-mail"
                    iconPosition="left"
                    placeholder="Email"
                    fluid
                    value={email}
                    onChange={updateHandler}
                  />

                  <FormInput
                    id="password"
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    fluid
                    value={password}
                    onChange={updateHandler}
                  />

                  <ButtonGroup vertical fluid>
                    <Button onClick={submitHandler}>Register</Button>
                  </ButtonGroup>
                </Segment>
              </CardContent>
            </Card>
          </Segment>
        </Container>
      </>
    );
  }
};
