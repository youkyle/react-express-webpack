import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navbar = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <NavLink to="/">NearbyShop</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {/* <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
        </Nav> */}
      <Nav pullRight>
        <LinkContainer to="/preferred">
          <NavItem eventKey={1}>
            <i className="fas fa-shopping-cart" />
Preferred Shops
          </NavItem>
        </LinkContainer>

        <NavDropdown
          eventKey={2}
          title="User Account"
          id="basic-nav-dropdown"
        >
          <LinkContainer to="/login">
            <MenuItem eventKey={2.1}>Sign In</MenuItem>
          </LinkContainer>
          <LinkContainer to="/register">
            <MenuItem eventKey={2.3}>Sign Up</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
