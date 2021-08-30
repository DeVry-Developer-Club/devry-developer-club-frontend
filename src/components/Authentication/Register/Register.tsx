import React, { Component } from "react";
import {
    Button,
    ButtonGroup,
    Card,
    CardContent,
    Container,
    Divider,
    Form,
    FormInput,Icon,
    Segment
} from "semantic-ui-react";

import { REGISTER_API_URL } from "../../../constants";

export class Register extends Component<any,any>
{
    constructor(props: any) {
        super(props);

        this.state = {
            username: "",
            password: "",
            email: ""
        }
    }

    createOptions()
    {
        const { username, password, email } = this.state;

        return {
            method: "POST",
            body: JSON.stringify({username,password,email}),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
    }

    async handleRegister()
    {
        try
        {
            const response = await fetch(REGISTER_API_URL, this.createOptions());

            console.log(response);
            return await response.json();
        }
        catch(err)
        {
            return err;
        }
    }

    submit(event: any)
    {
        event.preventDefault();

        const response = this.handleRegister();
        console.log(response);

        this.setState({username: "", password: "", email: ""})
    }

    onValueUpdated(event: any)
    {
        console.log("Testing");
        this.setState(
    {
            [event.target.id]: event.target.value
        });
    }

    render() {
        const { username, email, password } = this.state;

        return (
            <>
                <Container>
                    <Segment padded="very" vertical>
                        <Card centered>
                            <CardContent>
                                <Segment basic vertical>
                                    <h2>Test Register</h2>
                                    <Divider/>
                                    <Form>
                                        <FormInput
                                            id="username"
                                            icon="user"
                                            iconPosition="left"
                                            placeholder="Username"
                                            fluid
                                            value={username}
                                            onChange={this.onValueUpdated.bind(this)}/>
                                    </Form>

                                    <FormInput
                                        id="email"
                                        icon="e-mail"
                                        iconPosition="left"
                                        placeholder="Email"
                                        fluid
                                        value={email}
                                        onChange={this.onValueUpdated.bind(this)}
                                    />

                                    <FormInput
                                        id="password"
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                        fluid
                                        value={password}
                                        onChange={this.onValueUpdated.bind(this)}
                                    />

                                    <ButtonGroup vertical fluid>
                                        <Button onClick={this.submit.bind(this)}>
                                            Register
                                        </Button>
                                    </ButtonGroup>
                                </Segment>
                            </CardContent>
                        </Card>
                    </Segment>
                </Container>
            </>
        )
    }
}