import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AtlasNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Navbar id="navbar" className="fixed-top px-1 py-1 mb-3 container-fluid" expand="md" light>
        <NavbarBrand href="/" className="ml-2 text-dark d-flex align-items-center">
          <img src="/img/logo.png" alt="Kidney Tissue Atlas" className="logo" />
          <span id="title-text" className="ml-2">Kidney Tissue Atlas</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={`${window.location.pathname === '/' ? 'active' : ''} px-1`}>
              <NavLink href="/"><span className="nav-text px-1">Dashboard (Home)</span></NavLink>
            </NavItem>
            <NavItem className={`${window.location.pathname.replaceAll("/", "") === 'explorer' ? 'active' : ''} px-1`}>
              <NavLink href="/explorer"><span className="nav-text px-1">Explorer</span></NavLink>
            </NavItem>
            <NavItem className={`${window.location.pathname.replaceAll("/", "") === 'repository' ? 'active' : ''} px-1`}>
              <NavLink href="/repository"><span className="nav-text px-1">Repository</span></NavLink>
            </NavItem>
            <NavItem className={`${window.location.pathname.replaceAll("/", "") === 'spatial-viewer' ? 'active' : ''} px-1`}>
              <NavLink href="/spatial-viewer"><span className="nav-text px-1">Spatial Viewer</span></NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem className="nav-icon px-1">
              <NavLink rel="noreferrer" target='_blank' href="https://www.kpmp.org/help-docs/data">
                Help
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default AtlasNavBar;
