import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

class Navigation extends Component {
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
      <div className="container">
        <Navbar fixed="fixed" color="faded" light expand="md">
          <NavbarBrand href="/">Saurabh Merai</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AnchorLink className="nav-link" href="#education">Education</AnchorLink>
              </NavItem>
              
              <NavItem>
                <AnchorLink className="nav-link" href="#skills">Skills</AnchorLink>
              </NavItem>

              <NavItem>
                <AnchorLink className="nav-link" href="#work_experience">Work Experience</AnchorLink>
              </NavItem>

              <NavItem>
                <AnchorLink className="nav-link" href="#projects">Projects</AnchorLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;