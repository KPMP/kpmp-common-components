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
  Alert
} from 'reactstrap';
import { default as ReactGA4 } from 'react-ga4';

import { fetchAtlasMessages } from '../../helpers/ApolloClient';

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

class AtlasNavBar extends Component {
  // ReactGA4.initialize('G-64W6E37TQB', { testMode: process.env.NODE_ENV === 'test' });
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      alerts: [],
      visible: [],
      currentPage: window.location.pathname.substring(1).split("/")[0]
    }
  }

  componentDidMount() {
    fetchAtlasMessages().then((result) => {
      if(result){
        let vis = []
        result.forEach(() => {
          vis.push(true);
        })
        this.setState({alerts: result, visible: vis})
      }
    })
  }

  onDismiss = (index) => {
    this.setState({visible: [...this.state.visible.slice(0,index), false, ...this.state.visible.slice(index+1)]})
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }
  render () {
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
              </Nav>
              <Nav>
                <NavItem className="nav-icon px-1">
                  <NavLink onClick={() =>{
                    ReactGA4.event({
                      category: getPageForGA(this.state.currentPage),
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
        {
          this.state.alerts.length > 0 &&
          this.state.alerts.map((item, i) => {
              if (this.state.currentPage === item.application || item.application === "all") {
                return <Alert color='primary' style={{width: "98%", margin: "0 auto", marginBottom: "0.5rem"}} isOpen={this.state.visible[i]} toggle={() => this.onDismiss(i)}><div dangerouslySetInnerHTML={{__html: item.message}}></div></Alert>
              }
          })
        }
      </div>
    );
  }
}

export default AtlasNavBar;
