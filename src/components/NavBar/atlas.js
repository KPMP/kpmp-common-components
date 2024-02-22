import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Alert,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from 'reactstrap';
import { default as ReactGA4 } from 'react-ga4';

import { fetchAtlasMessages } from '../../helpers/ApolloClient';

const getPageForGA = (currentPage) => {
  switch (currentPage) {
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

class AtlasNavBar extends Component {
  // ReactGA4.initialize('G-64W6E37TQB', { testMode: process.env.NODE_ENV === 'test' });
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      alerts: [],
      dismissed: [],
      dropdownOpen: false,
      currentPage: window.location.pathname.substring(1).split("/")[0],
    }
  }

  componentDidMount() {
    fetchAtlasMessages().then((result) => {
        this.setState({ alerts: result})
      })
    }

  shouldShow(item){
    let dismissedAlerts = Object.keys(window.localStorage);
    if (dismissedAlerts && dismissedAlerts.includes(item.id.toString())) {
      return false
    }else{
      return true
    }
  }

  onDismiss = (item) => {
    //we're setting this state so that the component updates. We get the dismissed items from session storage
    this.setState({dismissed: item.id})
    window.localStorage.setItem(item.id, '');
  }

  handleMouseEnter = () => {
    this.setState({ dropdownOpen: true });
  }

  handleMouseLeave = () => {
    this.setState({ dropdownOpen: false });
  }

  dropdownToggle = () => {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    return (
      <div>
        <Container>
          <Navbar id="navbar" className="fixed-top px-1 py-1 mb-3 container-fluid" expand="md" light>
            <NavbarBrand href="/" className="ms-2 text-dark d-flex align-items-center">
              <img src="/img/logo.png" alt="Kidney Tissue Atlas" className="logo" />
              <span id="title-text" className="ms-2">Kidney Tissue Atlas</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem className={`${window.location.pathname === '/' ? 'active' : ''} px-1`}>
                  <NavLink href="/"><span className="nav-text px-1">Dashboard (Home)</span></NavLink>
                </NavItem>
                <NavItem className={`${this.state.currentPage === 'explorer' ? 'active' : ''} px-1`}>
                  <NavLink href="/explorer"><span className="nav-text px-1">Explorer</span></NavLink>
                </NavItem>
                <NavItem className={`${this.state.currentPage === 'repository' ? 'active' : ''} px-1`}>
                  <NavLink href="/repository"><span className="nav-text px-1">Repository</span></NavLink>
                </NavItem>
                <NavItem className={`${this.state.currentPage === 'spatial-viewer' ? 'active' : ''} px-1`}>
                  <NavLink href="/spatial-viewer"><span className="nav-text px-1">Spatial Viewer</span></NavLink>
                </NavItem>
              </Nav><Nav>
            <NavItem className="nav-icon px-1 help-menu">
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle} direction='down' onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <DropdownToggle caret>Help</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank' href='https://www.kpmp.org/help-docs/software'><span className='nav-text px-1'>About the Atlas</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank' href='https://www.kpmp.org/help-docs/software?tabname=atlasreleasenotes'><span className='nav-text px-1'>Release Notes</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank'
                      href='https://www.kpmp.org/help-docs/software?tabname=atlasdatachangelog'><span className='nav-text px-1'>Data Change Log</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank'
                      href='https://www.kpmp.org/help-docs/software?tabname=atlasknownissues'><span className='nav-text px-1'>Known Issues</span></NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank' href='https://www.kpmp.org/help-docs/study-overview'><span className='nav-text px-1'>Study Overview</span></NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank' href='https://www.kpmp.org/help-docs/technologies'><span className='nav-text px-1'>Technologies</span></NavLink>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink 
                    onClick={() =>{
                      ReactGA4.event({
                        category: getPageForGA(this.state.currentPage),
                        action: 'Navigation',
                        label: 'Help'})
                      }}
                      rel="noreferrer" target='_blank' href='https://app.smartsheet.com/b/form/7e25c95073a044cf95cf5f13566deaaf'><span className='nav-text px-1'>Give us your feedback</span></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
    <div className='alerts'
          style={{
            position: "absolute",
            width: "100%",
            zIndex: "1021",
            backgroundColor: "rgb(250 251 252)",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
          }}>
            {console.log(this.state.alerts)}
        {
          this.state.alerts.length > 0 &&
          this.state.alerts.map((item, i) => {
              if ((this.state.currentPage === item.application || item.application === "all") && this.shouldShow(item)) {
                return <Alert color='primary' style={{width: "98%", margin: "0 auto", marginBottom: "0.5rem"}} toggle={() => this.onDismiss(item)}><div dangerouslySetInnerHTML={{__html: item.message}}></div></Alert>
              }
            })
          }
          </div>
        </div>
    );
  }
}

export default AtlasNavBar;
