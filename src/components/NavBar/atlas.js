import React, {useEffect, useState} from 'react';
import DropdownMenu from './HelpDropdown';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownItem
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
  const [dropdownOpen, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  }

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  }

  const dropdownToggle = () => setDropdownOpen((prevState) => !prevState);

  ReactGA4.initialize('G-64W6E37TQB', { testMode: process.env.NODE_ENV === 'test' });
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  let currentPage = window.location.pathname.substring(1).split("/")[0]
  return (
    <Container>
      <Navbar id="navbar" className="fixed-top px-1 py-1 mb-3 container-fluid" expand="md" light>
        <NavbarBrand href="/" className="ms-2 text-dark d-flex align-items-center">
          <img src="/img/logo.png" alt="Kidney Tissue Atlas" className="logo" />
          <span id="title-text" className="ms-2">Kidney Tissue Atlas</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
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
            <NavItem className="nav-icon px-1 help-menu">
              <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle} direction='down'>
                <DropdownToggle caret>Help</DropdownToggle>
                <DropdownMenu {...args}>
                  <DropdownItem>
                    <NavLink href='https://www.kpmp.org/help-docs/software'><span className='nav-text px-1'>About the Atlas</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='https://www.kpmp.org/help-docs/software?tabname=atlasreleasenotes'><span className='nav-text px-1'>Release Notes</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='https://www.kpmp.org/help-docs/software?tabname=atlasdatachangelog'><span className='nav-text px-1'>Data Change Log</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='https://www.kpmp.org/help-docs/software?tabname=atlasknownissues'><span className='nav-text px-1'>Known Issues</span></NavLink>
                  </DropdownItem>
                  <DropdownItem disabled>FAQs</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href='https://www.kpmp.org/help-docs/study-overview'><span className='nav-text px-1'>Study Overview</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href='https://www.kpmp.org/help-docs/technologies'><span className='nav-text px-1'>Technologies</span></NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href='https://app.smartsheet.com/b/form/7e25c95073a044cf95cf5f13566deaaf'><span className='nav-text px-1'>Give us your feedback</span></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              {/* <NavLink onClick={() =>{
                ReactGA4.event({
                  category: getPageForGA(currentPage),
                  action: 'Navigation',
                  label: 'Help'})
                }}
                rel="noreferrer" target='_blank' href="https://kpmp.org/help">
                Help
              </NavLink> */}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
}

export default AtlasNavBar;
