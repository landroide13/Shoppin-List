import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
  } from 'reactstrap';

export default class NavbarApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggle = () =>{
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {

    return (
      <React.Fragment>

        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>

                </NavItem>
              </Nav>
            </Collapse>
          </Container>

        </Navbar>

      </React.Fragment>
    )
  }
}
