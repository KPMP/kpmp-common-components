import React, {useEffect, useState} from 'react';
import { useHistory, useLocation } from "react-router-dom";

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
import { default as ReactGA4 } from 'react-ga4';

const getPageForGA = (currentPage) => {
  switch(currentPage) {
    case "explorer":
      return "Explorer"
    case "repository":
      return "Repository"
    case "spatial-viewer":
      return "Spatial Viewer"
    default:
      return "KPMP Atlas"
  }
}

const AtlasNavBar = (props) => {
  ReactGA4.initialize('G-64W6E37TQB', { testMode: process.env.NODE_ENV === 'test' });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let currentPage = window.location.pathname.substring(1).split("/")[0]
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
            <NavItem className={`${currentPage === 'explorer' ? 'active' : ''} px-1`}>
              <NavLink href="/explorer"><span className="nav-text px-1">Explorer</span></NavLink>
            </NavItem>
            <NavItem className={`${currentPage === 'repository' ? 'active' : ''} px-1`}>
              <NavLink href="/repository"><span className="nav-text px-1">Repository</span></NavLink>
            </NavItem>
            <NavItem className={`${currentPage === 'spatial-viewer' ? 'active' : ''} px-1`}>
              <NavLink href="/spatial-viewer"><span className="nav-text px-1">Spatial Viewer</span></NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem className="nav-icon px-1">
              <NavLink onClick={() =>{
                ReactGA4.event({
                  category: getPageForGA(currentPage),
                  action: 'Navigation',
                  label: 'Help'})
                }}
                rel="noreferrer" target='_blank' href="https://kpmp.org/help">
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
