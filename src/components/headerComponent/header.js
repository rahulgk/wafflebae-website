import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <header>
          <Navbar  color="dark" dark expand="md" fixed="top">
            <div className="logo"></div>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mx-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/About">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Menu">Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Gallery">Gallery</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Franchise">Franchise</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/Contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </div>
    );
  }
}