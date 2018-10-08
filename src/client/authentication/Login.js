import React, { Component } from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  Grid,
  Row,
  Col,
  Panel,
  Button
} from 'react-bootstrap';
import axios from 'axios';

export class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  getValidationState = () => {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:80/nearby-shop-back/public/api/login', this.state)
      .then((res) => {
        if (res.data.status === 'success') {
          console.log(res.data);
          return localStorage.setItem('token', res.data.user.api_token);
        }
        return console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { email, password } = this.state;

    return (
      <Grid>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Login</Panel.Title>
          </Panel.Heading>
          <form>
            <Panel.Body>
              <Row>
                <Col sm={6} smOffset={3}>
                  <FormGroup
                    controlId="formEmail"
                    validationState={this.getValidationState()}
                  >
                    <ControlLabel>Email:</ControlLabel>
                    <FormControl
                      name="email"
                      type="email"
                      value={email}
                      placeholder="Enter email"
                      onChange={this.handleChange}
                      required
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6} smOffset={3}>
                  <FormGroup
                    controlId="formPassword"
                    validationState={this.getValidationState()}
                  >
                    <ControlLabel>Password:</ControlLabel>
                    <FormControl
                      name="password"
                      type="password"
                      value={password}
                      placeholder="Enter password"
                      onChange={this.handleChange}
                      required
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6} smOffset={3}>
                  <Button bsStyle="primary" onClick={this.handleLogin}>
                    submit
                  </Button>
                </Col>
              </Row>
            </Panel.Body>
          </form>
        </Panel>
      </Grid>
    );
  }
}

export default Login;
