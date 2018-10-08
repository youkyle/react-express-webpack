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

export class Register extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  getValidationState = () => {};

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(
        'http://localhost:80/nearby-shop-back/public/api/register',
        this.state
      )
      .then(res => localStorage.setItem('token', res.data.user.api_token));
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <Grid>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Register</Panel.Title>
          </Panel.Heading>
          <form>
            <Panel.Body>
              <Row>
                <Col sm={6} smOffset={3}>
                  <FormGroup
                    controlId="formName"
                    validationState={this.getValidationState()}
                  >
                    <ControlLabel>Full Name:</ControlLabel>
                    <FormControl
                      name="name"
                      type="text"
                      value={name}
                      placeholder="Enter name"
                      onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
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
                    />
                    <FormControl.Feedback />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={6} smOffset={3}>
                  <Button bsStyle="primary" onClick={this.handleRegister}>
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

export default Register;
