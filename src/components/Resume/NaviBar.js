import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const NaviBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src='http://studyinc.org/wp-content/uploads/2018/11/StudyInc-Logo-200.png'/></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem>
              <NavLink href="http://studyinc.org/"></NavLink>
            </NavItem>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Experience
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Entry Level: 0 to 5 years work experience 
                </DropdownItem>
                <DropdownItem>
                  Middle Level: 5 or more years work experience
                </DropdownItem>
                <DropdownItem>
                  Management or Executive
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">Education</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Qualifications</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Core Compentencies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Professional Experience</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Achievements</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3000/a">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="http://localhost:3000/Reference">References</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Professional Designation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Video</NavLink>
            </NavItem> 
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NaviBar;